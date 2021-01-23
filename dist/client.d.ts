/// <reference types="node" />
import EventEmitter from 'events';
import { RequestInit } from 'node-fetch';
import { ICanonWebRemoteClientOptions, ICanonWebRemoteLensProperties, ICanonWebRemoteLensValues, ICanonWebRemoteWhiteBalanceModes, ICanonWebRemoteShutterModes, ICanonWebRemoteMetadata } from './interfaces';
import { CanonWebRemoteLive } from './live';
export declare class CanonWebRemoteClient extends EventEmitter {
    private cookies;
    sequence: number;
    private timeoutCount;
    private isPolling;
    get apiUrl(): string;
    private readonly rawProperties;
    get selectedSdCardSlot(): string;
    get recordingMinutesLeftOnSdCard(): number;
    get selectedCompactFlashCardSlot(): string;
    get recordingMinutesLeftOnCompactFlashCard(): number;
    get zoomStatus(): "run" | "stop";
    get zoomPosition(): number;
    get zoomSpeed(): number;
    get apertureModeEnabled(): boolean;
    get apertureMode(): string;
    get apertureValueEnabled(): boolean;
    get apertureValue(): string;
    get whiteBalanceModeEnabled(): boolean;
    get whiteBalanceMode(): string;
    get whiteBalanceValueEnabled(): boolean;
    get whiteBalanceValue(): string;
    get shutterSpeedModeEnabled(): boolean;
    get shutterSpeedMode(): string;
    get shutterSpeedValueEnabled(): boolean;
    get shutterSpeedValue(): string;
    get gainControlModeEnabled(): boolean;
    get gainControlMode(): string;
    get gainControlValueEnabled(): boolean;
    get gainControlValue(): string;
    get isNdFilterAuto(): boolean;
    get isFocusAuto(): boolean;
    get isRecording(): boolean;
    get timecode(): string;
    get com(): number;
    get assignableButtons(): any[];
    private readonly rawPropertyMap;
    readonly liveView: CanonWebRemoteLive;
    readonly options: Partial<ICanonWebRemoteClientOptions>;
    constructor(options?: Partial<ICanonWebRemoteClientOptions>);
    /**
     * Sends an autofocus toggle command to the
     * camera if it is disabled
     */
    enableAutoFocus(): false | Promise<boolean>;
    /**
     * Sends an autofocus toggle command to the
     * camera if it is enabled
     */
    disableAutoFocus(): false | Promise<boolean>;
    /**
     * Sends an autofocus toggle command to the camera
     */
    toggleAutoFocus(): Promise<boolean>;
    /**
     * Sends an absolute zoom step command to the camera.
     *
     * As far as I know, thats is the only absolute way to position zoom.
     *
     * @param step One of 6 absolute equidistant zoom steps
     */
    setZoomStep(step: 1 | 2 | 3 | 4 | 5 | 6): Promise<boolean>;
    /**
     * Steps the zoom forward (tele).
     *
     * @param size The step size (small, medium and big)
     */
    stepZoomForward(size: 1 | 2 | 3): Promise<boolean>;
    /**
     * Steps the zoom backwards (wide).
     *
     * @param size The step size (small, medium and big)
     */
    stepZoomBack(size: 1 | 2 | 3): Promise<boolean>;
    /**
     * Steps focus nearer of the camera
     *
     * @param size The step size (small, medium and big)
     */
    stepFocusNearer(size: 1 | 2 | 3): Promise<boolean>;
    /**
     * Steps focus further of the camera
     *
     * @param size The step size (small, medium and big)
     */
    stepFocusFurther(size: 1 | 2 | 3): Promise<boolean>;
    /**
     * Retrieves a list of possible white balance modes
     */
    getWhiteBalanceModeOptions(): Promise<string[]>;
    /**
     * Updates the current white balance mode of the camera
     *
     * @param mode string from `getWhiteBalanceModeOptions()`
     */
    setWhiteBalanceMode(mode: ICanonWebRemoteWhiteBalanceModes | string): Promise<boolean>;
    /**
     * Retrieves a list of available white balace value options
     * from the camera.
     *
     * Please note that white balance **mode** will change the content of this list.
     */
    getWhiteBalanceValueOptions(): Promise<string[]>;
    /**
     * Updates the cameras white balance value
     *
     * @param value a string from `getWhiteBalanceValueOptions()` (be careful to **mode**)
     */
    setWhiteBalanceValue(value: string): Promise<boolean>;
    /**
     * Sets gain mode as `Automatic`
     */
    enableAutoGain(): Promise<boolean>;
    /**
     * Sets gain mode as `Manual`
     */
    disableAutoGain(): Promise<boolean>;
    /**
     * Retrieves a list of possible values for sensor gain
     *
     * (as a list of decimal number strings (`'24.0'` for +24dB))
     */
    getGainOptions(): Promise<string[]>;
    /**
     * Updates cameras sensor gain in dB
     *
     * @param value a string value from `getGainOptions()`
     */
    setGain(value: string): Promise<boolean>;
    /**
     * Sets aperture mode to `Automatic`
     */
    enableAutoAperture(): Promise<boolean>;
    /**
     * Sets aperture mode to `Manual`
     */
    disableAutoAperture(): Promise<boolean>;
    /**
     * Retrieves a list of possible Aperture values
     * for current **mode**
     */
    getApertureValueOptions(): Promise<string[]>;
    /**
     * Updates aperture value.
     *
     * Please not that this method will fail in Auto mode.
     *
     * @param aperture a string from `getApertureValueOptions()`
     */
    setApertureValue(aperture: string): Promise<boolean>;
    /**
     * Retrieves a list of possible shutter modes
     */
    getShutterModeOptions(): Promise<string[]>;
    /**
     * Sets shutter mode as `Automatic`
     */
    enableAutoShutter(): Promise<boolean>;
    /**
     * Updates shutter mode
     *
     * @param mode a string value from `getShutterModeOptions()`
     */
    setShutterMode(mode: ICanonWebRemoteShutterModes | string): Promise<boolean>;
    /**
     * Retrieves a list of possible shutter speeds or values
     *
     * Please note that the output of this method will change according to selected **mode**
     */
    getShutterValueOptions(): Promise<string[]>;
    /**
     * Updates shutter speed or value
     *
     * @param speed a string value from `getShutterValueOptions()`
     */
    setShutterValue(speed: string): Promise<boolean>;
    /**
     * Sends a n ND filter toggle command to the camera
     */
    toggleAutoNdFilter(): Promise<boolean>;
    /**
     * Sends a n ND filter toggle command to the camera
     * *if the local state has automatic nd filters as DISABLED*
     */
    enableAutoNdFilter(): false | Promise<boolean>;
    /**
     * Sends a n ND filter toggle command to the camera
     * *if the local state has automatic nd filters as ENABLED*
     */
    disableAutoNdFilter(): false | Promise<boolean>;
    /**
     * Simulates a push on one of the cameras assignable buttons
     *
     * @param number The button identifying number
     */
    pushAssignableButton(number: number): Promise<boolean>;
    /**
     * Sends a recording toggle command to the
     * camera if recording is not on already
     */
    startRecording(): false | Promise<boolean>;
    /**
     * Sends a recording toggle command to the
     * camera if recording IS on
     */
    stopRecording(): false | Promise<boolean>;
    /**
     * Sends a recording toggle command to the camera
     */
    toggleRecording(): Promise<boolean>;
    /**
     * Sends a new set of metadata to be baked in the next recorded clip
     *
     * @param metadata
     */
    updateNextClipMetadata(metadata: ICanonWebRemoteMetadata): Promise<boolean>;
    /**
     * Fetches next update, applies it to state and emit associated events
     */
    refresh(): Promise<boolean>;
    fetch(path: string, options?: RequestInit): Promise<import("node-fetch").Response>;
    /**
     * Fetches the next batch of updates with the given sequence, or following current one.
     *
     * @note The response takes around 25ms on a XF205
     * @param sequence (optionnal) A sequence number. Set to `1` to force a refresh of all data.
     */
    private fetchUpdates;
    /**
     * Attemps to fetch an array of possible (string) values for a given property ID
     *
     * @param propertyId
     */
    fetchPropertyOptions(propertyId: string): Promise<string[]>;
    /**
     * Sends a property update request to the camera
     *
     * @param propertyId
     * @param value
     */
    fetchPropertyUpdate(propertyId: string, value: string): Promise<boolean>;
    /**
     * Sends a lense drive command request to the camera
     *
     * @param propertyId
     * @param value
     */
    fetchLensDriveUpdate(propertyId: ICanonWebRemoteLensProperties, value: ICanonWebRemoteLensValues | string): Promise<boolean>;
    /**
     * Attempts a login against camera with given credentials
     *
     * sets current client cookies if successful
     */
    fetchLogin(username: string, password: string): Promise<boolean>;
    /**
     * Handles a response error and MAYBE throws an error
     */
    private handleResponseError;
    /**
     * "Recursive" poll method, calling itself after response has been received
     */
    private poll;
    /**
     * Starts an active listening connection to the camera
     *
     * @param username Username configured in the camera settings
     * @param password Username set in the camera settings
     */
    connect(username: string, password: string): Promise<void>;
    /**
     * Stops polling, clears client sessios, effectively ending camera event polling.
     *
     * Camera takes between 10 and 30s to garbage collect
     * the previous session and allow a new one.
     */
    disconnect(): void;
}
