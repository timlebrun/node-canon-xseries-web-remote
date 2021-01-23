export declare enum ICanonWebRemoteLensProperties {
    ZOOM = "zoom",
    ZOOM_STEP = "stepzoom",
    IRIS = "iris",
    FOCUS = "fl",
    SWITCH = "sw"
}
export declare enum ICanonWebRemoteLensValues {
    ZOOM_TELE_SHORT = "tele1",
    ZOOM_TELE_MEDIUM = "tele2",
    ZOOM_TELE_LONG = "tele3",
    ZOOM_WIDER_SHORT = "wide1",
    ZOOM_WIDER_MEDIUM = "wide2",
    ZOOM_WIDER_LONG = "wide3",
    ZOOM_STEP_1 = "1",
    ZOOM_STEP_2 = "2",
    ZOOM_STEP_3 = "3",
    ZOOM_STEP_4 = "4",
    ZOOM_STEP_5 = "5",
    ZOOM_STEP_6 = "6",
    IRIS_PLUS = "plus",
    IRIS_MINUS = "minus",
    FOCUS_FURTHER_SHORT = "far1",
    FOCUS_FURTHER_MEDIUM = "far2",
    FOCUS_FURTHER_LONG = "far3",
    FOCUS_NEARER_SHORT = "near1",
    FOCUS_NEARER_MEDIUM = "near2",
    FOCUS_NEARER_LONG = "near3",
    FOCUS = "focus"
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
    res?: 'ok' | 'busy';
}
export interface ICanonWebRemotePropsResponse extends ICanonWebRemoteResponse {
    seq?: number;
    com?: number;
    tc?: string;
    mode?: 'Ctrl';
    rec?: 'Stby' | 'Rec';
    batt?: number;
    camid?: string;
    cbtn?: 'f1i1';
    Ozoom?: ICanonWebRemotePropsResponseZoom;
    Ocf?: ICanonWebRemotePropsResponseStorage;
    Osd?: ICanonWebRemotePropsResponseStorage;
    Owbm?: ICanonWebRemotePropsResponseProp;
    Owbv?: ICanonWebRemotePropsResponseProp;
    Oam?: ICanonWebRemotePropsResponseProp;
    Oav?: ICanonWebRemotePropsResponseProp;
    Ossm?: ICanonWebRemotePropsResponseProp;
    Ossv?: ICanonWebRemotePropsResponseProp;
    Ogcm?: ICanonWebRemotePropsResponseProp;
    Ogcv?: ICanonWebRemotePropsResponseProp;
    Oasn1?: ICanonWebRemotePropsResponseProp;
    Oasn2?: ICanonWebRemotePropsResponseProp;
    Oasn3?: ICanonWebRemotePropsResponseProp;
    Oasn4?: ICanonWebRemotePropsResponseProp;
    gpsunit?: 0 | 1;
    irfullauto?: 2;
    nbtn?: 'ON' | 'OFF';
    fbtn?: 'AF' | 'MF';
    mcbtn?: "enAct";
    msg?: string;
}
export interface ICanonWebRemotePropsResponseZoom {
    pos?: number;
    speed?: number;
    status?: 'run' | 'stop';
}
export interface ICanonWebRemotePropsResponseProp {
    pv: string;
    en?: 1 | 0;
    rvn?: number;
    rv?: string[];
}
export interface ICanonWebRemotePropsResponseStorage {
    sel: string;
    artime: number;
    brtime: number;
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
export declare enum ICanonWebRemoteWhiteBalanceModes {
    KELVIN = "Kelvin",
    DAYLIGHT = "Daylight",
    TUNGSTEN = "Tungsten",
    PRESET_A = "PresetA",
    PRESET_B = "PresetB",
    AUTO = "Automatic"
}
export declare enum ICanonWebRemoteShutterModes {
    OFF = "off",
    SLOW = "slow",
    SPEED = "speed",
    ANGLE = "angle",
    CLEAR_SCAN = "cls",
    AUTO = "Automatic"
}
