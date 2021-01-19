import EventEmitter from 'events';
import fetch, { RequestInit } from 'node-fetch';
import AbortController from 'node-abort-controller';
import base64 from 'base-64';

import {
  ICanonWebRemoteClientOptions,
  ICanonWebRemoteResponse,
  ICanonWebRemotePropsResponse,
  ICanonWebRemotePropsResponseProp,
  ICanonWebRemoteLensProperties,
  ICanonWebRemoteLensValues,
  ICanonWebRemoteWhiteBalanceModes,
  ICanonWebRemoteShutterModes,
  ICanonWebRemoteMetadata,
} from './interfaces';

import { deepMerge, formatCookiesForRequest, parseCookies, timeout } from './helpers';
import { AlreadyConnected, Busy, Timeout, MaxTimeouts } from './exceptions';
import { CanonWebRemoteLive } from './live';

const { ZOOM, ZOOM_STEP, FOCUS, SWITCH } = ICanonWebRemoteLensProperties;

export class CanonWebRemoteClient extends EventEmitter {

  private cookies: {[key: string]: string};
  public sequence: number = 0;
  private timeoutCount = 0;

  private isPolling = false;

  get apiUrl() { return `http://${this.options.cameraHost}:${this.options.cameraPort}/api`; }

  private readonly rawProperties: ICanonWebRemotePropsResponse = {};

  get selectedSdCardSlot() { return this.rawProperties.Osd.sel === 'n' ? null : this.rawProperties.Osd.sel; }
  get recordingMinutesLeftOnSdCard() { return +this.rawProperties.Osd.artime; }
  get selectedCompactFlashCardSlot() { return this.rawProperties.Ocf.sel === 'n' ? null : this.rawProperties.Ocf.sel; }
  get recordingMinutesLeftOnCompactFlashCard() { return +this.rawProperties.Ocf.artime; }

  get zoomStatus() { return this.rawProperties.Ozoom ? this.rawProperties.Ozoom.status : undefined; }
  get zoomPosition() { return this.rawProperties.Ozoom ? this.rawProperties.Ozoom.pos : undefined; }
  get zoomSpeed() { return this.rawProperties.Ozoom ? this.rawProperties.Ozoom.speed : undefined; }

  get apertureModeEnabled() { return this.rawProperties.Oam ? !!this.rawProperties.Oam.en : undefined; }
  get apertureMode() { return this.rawProperties.Oam ? this.rawProperties.Oam.pv : undefined; }
  get apertureValueEnabled() { return this.rawProperties.Oav ? !!this.rawProperties.Oav.en : undefined; }
  get apertureValue() { return this.rawProperties.Oav ? this.rawProperties.Oav.pv : undefined; }

  get whiteBalanceModeEnabled() { return this.rawProperties.Owbm ? !!this.rawProperties.Owbm.en : undefined; }
  get whiteBalanceMode() { return this.rawProperties.Owbm ? this.rawProperties.Owbm.pv : undefined; }
  get whiteBalanceValueEnabled() { return this.rawProperties.Owbv ? !!this.rawProperties.Owbv.en : undefined; }
  get whiteBalanceValue() { return this.rawProperties.Owbv ? this.rawProperties.Owbv.pv : undefined; }

  get shutterSpeedModeEnabled() { return this.rawProperties.Ossm ? !!this.rawProperties.Ossm.en : undefined; }
  get shutterSpeedMode() { return this.rawProperties.Ossm ? this.rawProperties.Ossm.pv : undefined; }
  get shutterSpeedValueEnabled() { return this.rawProperties.Ossv ? !!this.rawProperties.Ossv.en : undefined; }
  get shutterSpeedValue() { return this.rawProperties.Ossv ? this.rawProperties.Ossv.pv : undefined; }

  get gainControlModeEnabled() { return this.rawProperties.Ogcm ? !!this.rawProperties.Ogcm.en : undefined; }
  get gainControlMode() { return this.rawProperties.Ogcm ? this.rawProperties.Ogcm.pv : undefined; }
  get gainControlValueEnabled() { return this.rawProperties.Ogcv ? !!this.rawProperties.Ogcv.en : undefined; }
  get gainControlValue() { return this.rawProperties.Ogcv ? this.rawProperties.Ogcv.pv : undefined; }

  get isNdFilterAuto() { return this.rawProperties.nbtn ? (this.rawProperties.nbtn == 'ON' ? true : false) : undefined; }
  get isFocusAuto() { return this.rawProperties.fbtn ? (this.rawProperties.fbtn == 'AF' ? true : false) : undefined; }
  get isRecording() { return this.rawProperties.rec ? (this.rawProperties.rec == 'Rec' ? true : false) : undefined; }
  get timecode() { return this.rawProperties.tc ? this.rawProperties.tc : undefined; }
  get com() { return this.rawProperties.com ? this.rawProperties.com : undefined; }

  get assignableButtons() {
    const assignableButtons = [];

    for (let b = 1; b <= this.options.assignableButtonsCount; b++)
      if (this.rawProperties[`Oasn${b}`])
        assignableButtons.push({ label: this.rawProperties[`Oasn${b}`].pv, enabled: !!this.rawProperties[`Oasn${b}`].en })

    return assignableButtons;
  }

  private readonly rawPropertyMap = {
    Ozoom: () => this.emit('zoom', this.zoomPosition, this),
    Ossv: () => this.emit('shutter', this.shutterSpeedValue, this),
    Oav: () => this.emit('aperture', this.apertureValue, this),
    Ogcv: () => this.emit('gain', this.gainControlValue, this),
    Owbv: () => this.emit('whiteBalance', this.whiteBalanceValue, this),
    rec: () => this.emit('recording', this.isRecording, this),
    fbtn: () => this.emit('focusAuto', this.isFocusAuto, this),
    nbtn: () => this.emit('ndFilterAuto', this.isNdFilterAuto, this),
    com: () => this.emit('com', this.com, this),
  };

  // @todo maybe try to keep track of focus here ?

  public readonly liveView = new CanonWebRemoteLive(this);

  public readonly options: Partial<ICanonWebRemoteClientOptions> = {
    assignableButtonsCount: 4,
    pollingMaxTimeouts: 3,
    pollingTimeout: 1000,
    pollingInterval: 500,
    liveViewInterval: 50,
    cameraPort: 80,
    ignoreErrors: false,
  }

  constructor(
    options: Partial<ICanonWebRemoteClientOptions> = {},
  ) {
    super();
    Object.assign(this.options, options);
  }

  /**
   * Sends an autofocus toggle command to the
   * camera if it is disabled
   */
  public enableAutoFocus() {
    return this.isFocusAuto ? false : this.toggleAutoFocus();
  }

  /**
   * Sends an autofocus toggle command to the
   * camera if it is enabled
   */
  public disableAutoFocus() {
    return this.isFocusAuto ? this.toggleAutoFocus() : false;
  }

  /**
   * Sends an autofocus toggle command to the camera
   */
  public toggleAutoFocus() {
    return this.fetchLensDriveUpdate(SWITCH, 'focus');
  }

  /**
   * Sends an absolute zoom step command to the camera.
   * 
   * As far as I know, thats is the only absolute way to position zoom.
   * 
   * @param step One of 6 absolute equidistant zoom steps
   */
  public setZoomStep(step: 1|2|3|4|5|6) {
    return this.fetchLensDriveUpdate(ZOOM_STEP, step + '');
  }

  /**
   * Steps the zoom forward (tele).
   * 
   * @param size The step size (small, medium and big)
   */
  public stepZoomForward(size: 1|2|3) {
    return this.fetchLensDriveUpdate(ZOOM, `tele${size}`);
  }

  /**
   * Steps the zoom backwards (wide).
   * 
   * @param size The step size (small, medium and big)
   */
  public stepZoomBack(size: 1|2|3) {
    return this.fetchLensDriveUpdate(ZOOM, `wide${size}`);
  }

  /**
   * Steps focus nearer of the camera
   * 
   * @param size The step size (small, medium and big)
   */
  public stepFocusNearer(size: 1|2|3) {
    return this.fetchLensDriveUpdate(FOCUS, `far${size}`);
  }

  /**
   * Steps focus further of the camera
   * 
   * @param size The step size (small, medium and big)
   */
  public stepFocusFurther(size: 1|2|3) {
    return this.fetchLensDriveUpdate(FOCUS, `near${size}`);
  }

  /**
   * Retrieves a list of possible white balance modes
   */
  public getWhiteBalanceModeOptions() {
    return this.fetchPropertyOptions('wbm');
  }

  /**
   * Updates the current white balance mode of the camera
   * 
   * @param mode string from `getWhiteBalanceModeOptions()`
   */
  public setWhiteBalanceMode(mode: ICanonWebRemoteWhiteBalanceModes | string) {
    return this.fetchPropertyUpdate('wbm', mode);
  }

  /**
   * Retrieves a list of available white balace value options
   * from the camera.
   * 
   * Please note that white balance **mode** will change the content of this list.
   */
  public getWhiteBalanceValueOptions() {
    return this.fetchPropertyOptions('wbv');
  }

  /**
   * Updates the cameras white balance value
   * 
   * @param value a string from `getWhiteBalanceValueOptions()` (be careful to **mode**)
   */
  public setWhiteBalanceValue(value: string) {
    return this.fetchPropertyUpdate('wbv', value);
  }

  /**
   * Sets gain mode as `Automatic`
   */
  public enableAutoGain() {
    return this.fetchPropertyUpdate('gcm', 'Automatic');
  }

  /**
   * Sets gain mode as `Manual`
   */
  public disableAutoGain() {
    return this.fetchPropertyUpdate('gcm', 'Manual');
  }

  /**
   * Retrieves a list of possible values for sensor gain
   * 
   * (as a list of decimal number strings (`'24.0'` for +24dB))
   */
  public getGainOptions() {
    return this.fetchPropertyOptions('gcv');
  }

  /**
   * Updates cameras sensor gain in dB
   * 
   * @param value a string value from `getGainOptions()`
   */
  public setGain(value: string) {
    return this.fetchPropertyUpdate('gcv', value);
  }

  /**
   * Sets aperture mode to `Automatic`
   */
  public enableAutoAperture() {
    return this.fetchPropertyUpdate('am', 'Automatic');
  }

  /**
   * Sets aperture mode to `Manual`
   */
  public disableAutoAperture() {
    return this.fetchPropertyUpdate('am', 'Manual');
  }

  /**
   * Retrieves a list of possible Aperture values
   * for current **mode**
   */
  public getApertureValueOptions() {
    return this.fetchPropertyOptions('av');
  }

  /**
   * Updates aperture value.
   * 
   * Please not that this method will fail in Auto mode.
   * 
   * @param aperture a string from `getApertureValueOptions()`
   */
  public setApertureValue(aperture: string) {
    return this.fetchPropertyUpdate('av', aperture);
  }

  /**
   * Retrieves a list of possible shutter modes
   */
  public getShutterModeOptions() {
    return this.fetchPropertyOptions('ssm');
  }

  /**
   * Sets shutter mode as `Automatic`
   */
  public enableAutoShutter() {
    return this.fetchPropertyUpdate('ssm', 'Automatic');
  }

  /**
   * Updates shutter mode
   * 
   * @param mode a string value from `getShutterModeOptions()`
   */
  public setShutterMode(mode: ICanonWebRemoteShutterModes | string) {
    return this.fetchPropertyUpdate('ssm', mode);
  }

  /**
   * Retrieves a list of possible shutter speeds or values
   * 
   * Please note that the output of this method will change according to selected **mode**
   */
  public getShutterValueOptions() {
    return this.fetchPropertyOptions('ssv');
  }

  /**
   * Updates shutter speed or value
   * 
   * @param speed a string value from `getShutterValueOptions()`
   */
  public setShutterValue(speed: string) {
    return this.fetchPropertyUpdate('ssv', speed);
  }

  /**
   * Sends a n ND filter toggle command to the camera
   */
  public toggleAutoNdFilter() {
    return this.fetchLensDriveUpdate(SWITCH, 'focus');
  }

  /**
   * Sends a n ND filter toggle command to the camera
   * *if the local state has automatic nd filters as DISABLED*
   */
  public enableAutoNdFilter() {
    return this.isNdFilterAuto ? false : this.toggleAutoNdFilter();
  }

  /**
   * Sends a n ND filter toggle command to the camera
   * *if the local state has automatic nd filters as ENABLED*
   */
  public disableAutoNdFilter() {
    return this.isNdFilterAuto ? this.toggleAutoNdFilter() : false;
  }

  /**
   * Simulates a push on one of the cameras assignable buttons
   * 
   * @param number The button identifying number
   */
  public async pushAssignableButton(number: number) {
    const response = await this.fetch(`cam/assignbutton?num=${number}`);
    const data = await response.json() as ICanonWebRemoteResponse;

    return data.res == 'ok';
  }

  /**
   * Sends a recording toggle command to the
   * camera if recording is not on already
   */
  public startRecording() {
    return this.isRecording ? false : this.toggleRecording();
  }

  /**
   * Sends a recording toggle command to the
   * camera if recording IS on 
   */
  public stopRecording() { return this.isRecording ? this.toggleRecording() : false; }

  /**
   * Sends a recording toggle command to the camera
   */
  public async toggleRecording() {
    const response = await this.fetch('cam/rec?cmd=trig');
    const data = await response.json() as ICanonWebRemoteResponse;

    return data.res == 'ok';
  }

  /**
   * Sends a new set of metadata to be baked in the next recorded clip
   * 
   * @param metadata 
   */
  public async updateNextClipMetadata(metadata: ICanonWebRemoteMetadata) {
    const response = await this.fetch('cam/postmeta', { body: JSON.stringify(metadata) });
    const data = await response.json() as ICanonWebRemoteResponse;

    return data.res == 'ok';
  }

  /**
   * Fetches next update, applies it to state and emit associated events
   */
  public async refresh() {
    const cameraUpdates = await this.fetchUpdates();

    if (cameraUpdates.res === 'busy') return null;
    if (cameraUpdates.res !== 'ok') return this.handleResponseError(cameraUpdates.res);

    Object.assign(this.rawProperties, deepMerge(this.rawProperties, cameraUpdates));
    this.emit('rawUpdate', cameraUpdates, this);

    // Sends to events map
    for (const updatedKey in cameraUpdates) 
      if (cameraUpdates.hasOwnProperty(updatedKey))
        if (this.rawPropertyMap[updatedKey])
          this.rawPropertyMap[updatedKey](cameraUpdates[updatedKey]);
    
  }

  public async fetch(path: string, options: RequestInit = {}) {
    const abortController = new AbortController();
    const headers = options.headers ? options.headers : {};
    headers['if-modified-since'] = 'Thu, 01 Jun 1970 00:00:00 GMT';
    headers['cookie'] = formatCookiesForRequest(this.cookies);

    setTimeout(() => {
      abortController.abort();
      // throw new Timeout(); hmm probably not a good idea
    }, this.options.pollingTimeout);

    return fetch(`${this.apiUrl}/${path}`, {
      signal: abortController.signal,
      method: 'GET',
      credentials: 'include',
      ...options,
      headers, // hmm urlgy
    } as any);
  }

  /**
   * Fetches the next batch of updates with the given sequence, or following current one.
   * 
   * @note The response takes around 25ms on a XF205
   * @param sequence (optionnal) A sequence number. Set to `1` to force a refresh of all data.
   */
  private async fetchUpdates(sequence = this.sequence): Promise<ICanonWebRemotePropsResponse> {
    const response = await this.fetch(`cam/getcurprop?seq=${sequence}`)
      .catch(() => this.handleResponseError('timeout')) as Response | false; // might cause a problem if another exception arises
    
    if (!response) return {}; // If no response or an exeption was caught, return an empty object

    const data = await response.json();

    // If camera returned a new sequence number, update current state
    if (data.seq) this.sequence = data.seq;

    return data;
  }


  /**
   * Attemps to fetch an array of possible (string) values for a given property ID
   * 
   * @param propertyId 
   */
  async fetchPropertyOptions(propertyId: string): Promise<string[]> {
    const response = await this.fetch(`cam/getprop?r=${propertyId}`);
    const data = await response.json() as ICanonWebRemotePropsResponse;

    const property: ICanonWebRemotePropsResponseProp = data[`O${propertyId}`] ? data[`O${propertyId}`] : null;
    if (!property) return null;

    return property.rv;
  }

  /**
   * Sends a property update request to the camera
   * 
   * @param propertyId 
   * @param value 
   */
  async fetchPropertyUpdate(propertyId: string, value: string) {
    const response = await this.fetch(`cam/setprop?${propertyId}=${value}`);
    const data = await response.json() as ICanonWebRemotePropsResponse;

    return data.res == 'ok';
  }

  /**
   * Sends a lense drive command request to the camera
   * 
   * @param propertyId 
   * @param value 
   */
  async fetchLensDriveUpdate(propertyId: ICanonWebRemoteLensProperties, value: ICanonWebRemoteLensValues | string) {
    const response = await this.fetch(`cam/drivelens?${propertyId}=${value}`);
    const data = await response.json() as ICanonWebRemotePropsResponse;

    return data.res == 'ok';
  }

  /**
   * Attempts a login against camera with given credentials
   * 
   * sets current client cookies if successful
   */
  async fetchLogin(username: string, password: string) {
    // generate a HTTP basic auth token
    const authorizationToken = base64.encode(`${username}:${password}`);

    const response = await this.fetch('acnt/login', {
      headers: { authorization: `Basic ${authorizationToken}` }
    });
    const data = await response.json() as ICanonWebRemoteResponse;

    if (data.res !== 'ok') return this.handleResponseError(data.res);

    const headers = response.headers.raw();
    const cookieHeader = headers['set-cookie'];

    this.cookies = parseCookies(cookieHeader);
    this.cookies.brlang = '0'; // Required of status stays on `busy`
    // this.cookies.productId = "VKCX01";

    await timeout(this.options.pollingInterval);

    return true;
  }

  /**
   * Handles a response error and MAYBE throws an error
   */
  private handleResponseError(status: string) {
    let error: Error = new Error(status);
    if (status == 'busy') error = new Busy();
    if (status == 'timeout') error = new Timeout();
    if (status == 'errsession') error = new AlreadyConnected();

    this.emit('error', error);

    if (this.options.ignoreErrors) return false;
    
    throw error;
  }

  /**
   * "Recursive" poll method, calling itself after response has been received
   */
  private async poll() {
    if (!this.isPolling) return;
    if (this.timeoutCount >= this.options.pollingMaxTimeouts) throw new MaxTimeouts();

    try { await this.refresh(); }
    catch(error) {
      if (error instanceof Timeout) { this.timeoutCount++; }
    }

    if (this.isPolling) setTimeout(() => this.poll(), this.options.pollingInterval);

    return;
  }

  /**
   * Starts an active listening connection to the camera
   * 
   * @param username Username configured in the camera settings
   * @param password Username set in the camera settings
   */
  async connect(username: string, password: string) {
    await this.fetchLogin(username, password);

    this.isPolling = true;
    this.poll();
  }

  /**
   * Stops polling, clears client sessios, effectively ending camera event polling.
   * 
   * Camera takes between 10 and 30s to garbage collect
   * the previous session and allow a new one.
   */
  disconnect() {
    this.isPolling = false;
    this.cookies = {};
  }

}
