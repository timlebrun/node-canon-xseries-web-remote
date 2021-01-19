
export enum ICanonWebRemoteLensProperties {
  ZOOM = 'zoom',
  ZOOM_STEP = 'stepzoom',
  IRIS = 'iris',
  FOCUS = 'fl',
  SWITCH = 'sw', // ew
}

export enum ICanonWebRemoteLensValues {
  ZOOM_TELE_SHORT = 'tele1',
  ZOOM_TELE_MEDIUM = 'tele2',
  ZOOM_TELE_LONG = 'tele3',
  ZOOM_WIDER_SHORT = 'wide1',
  ZOOM_WIDER_MEDIUM = 'wide2',
  ZOOM_WIDER_LONG = 'wide3',
  ZOOM_STEP_1 = '1',
  ZOOM_STEP_2 = '2',
  ZOOM_STEP_3 = '3',
  ZOOM_STEP_4 = '4',
  ZOOM_STEP_5 = '5',
  ZOOM_STEP_6 = '6',
  IRIS_PLUS = 'plus',
  IRIS_MINUS = 'minus',
  FOCUS_FURTHER_SHORT = 'far1',
  FOCUS_FURTHER_MEDIUM = 'far2',
  FOCUS_FURTHER_LONG = 'far3',
  FOCUS_NEARER_SHORT = 'near1',
  FOCUS_NEARER_MEDIUM = 'near2',
  FOCUS_NEARER_LONG = 'near3',
  FOCUS = 'focus',
}

export interface ICanonWebRemoteClientOptions {
  cameraHost: string;
  cameraPort: number;
  pollingInterval?: number;
  pollingTimeout?: number;
  pollingMaxTimeouts?: number;
  liveViewInterval?: number;
  assignableButtonsCount: number;
  ignoreErrors: boolean;
}

export interface ICanonWebRemoteResponse {
  res?: 'ok'|'busy';
}

export interface ICanonWebRemotePropsResponse extends ICanonWebRemoteResponse {
  seq?: number;
  com?: number; // dotz from 1 to 10

  tc?: string; // Timecode in "14:05:59:09" format

  mode?: 'Ctrl';
  rec?: 'Stby'|'Rec';
  batt?: number;
  camid?: string;
  cbtn?: 'f1i1';

  Ozoom?: ICanonWebRemotePropsResponseZoom;

  Ocf?: ICanonWebRemotePropsResponseStorage; // Compact flash
  Osd?: ICanonWebRemotePropsResponseStorage; // SD Card

  Owbm?: ICanonWebRemotePropsResponseProp; // White Balance Mode
  Owbv?: ICanonWebRemotePropsResponseProp; // White Balance Value

  Oam?: ICanonWebRemotePropsResponseProp; // Aperture Mode
  Oav?: ICanonWebRemotePropsResponseProp; // Aperture Value

  Ossm?: ICanonWebRemotePropsResponseProp; // Shutter Speed Mode
  Ossv?: ICanonWebRemotePropsResponseProp; // Shutter Speed Value

  Ogcm?: ICanonWebRemotePropsResponseProp; // Gain Control Mode
  Ogcv?: ICanonWebRemotePropsResponseProp; // Gain Control Value

  Oasn1?: ICanonWebRemotePropsResponseProp; // Assignable button 1
  Oasn2?: ICanonWebRemotePropsResponseProp; // Assignable button 2
  Oasn3?: ICanonWebRemotePropsResponseProp; // Assignable button 3
  Oasn4?: ICanonWebRemotePropsResponseProp; // Assignable button 4

  // Tester d'update les boutons assignable setprop asn et getprop asn

  gpsunit?: 0|1; // Whether GPS unit is on ?
  irfullauto?: 2; // ??
  nbtn?: 'ON' | 'OFF'; // ND filter auto button
  fbtn?: 'AF'|'MF'; // focus button
  mcbtn?: "enAct"; // ??

  msg?: string; // Popup message to return to the user
}

export interface ICanonWebRemotePropsResponseZoom {
  pos?: number; // zoom position from 0 to 100
  speed?: number;
  status?: 'run'|'stop';
}

export interface ICanonWebRemotePropsResponseProp {
  pv: string; // Prop Value
  en?: 1|0; // Whether the parameter is enabled and displayed
  rvn?: number; // Size of `rv` array
  rv?: string[];
}

export interface ICanonWebRemotePropsResponseStorage {
  sel: string; // Prop Value
  artime: number; // Free capture time
  brtime: number; // ?? captured time
}

export interface ICanonWebRemoteMetadata {
  target: number;
  title: string;
  creator: string;
  location: string;
  description: string;
  altitude: string;
  longitude: string;
  latitude: string;
}

export enum ICanonWebRemoteWhiteBalanceModes {
  KELVIN = 'Kelvin',
  DAYLIGHT = 'Daylight',
  TUNGSTEN = 'Tungsten',
  PRESET_A = 'PresetA',
  PRESET_B = 'PresetB',
  AUTO = 'Automatic',
}

export enum ICanonWebRemoteShutterModes {
  OFF = 'off',
  SLOW = 'slow',
  SPEED = 'speed',
  ANGLE = 'angle',
  CLEAR_SCAN = 'cls',
  AUTO = 'Automatic',
}