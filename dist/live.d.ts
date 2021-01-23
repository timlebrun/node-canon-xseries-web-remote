/// <reference types="node" />
import EventEmitter from 'events';
import { CanonWebRemoteClient } from './client';
export declare class CanonWebRemoteLive extends EventEmitter {
    readonly client: CanonWebRemoteClient;
    private intervalId;
    constructor(client: CanonWebRemoteClient);
    start(): Promise<boolean>;
    stop(): Promise<boolean>;
    sendCommand(command: ICanonWebRemoteLiveCommands): Promise<any>;
    fetchFrameAt(date?: Date): Promise<Blob>;
    private static formatDateTime;
}
export declare enum ICanonWebRemoteLiveCommands {
    START = "start",
    STOP = "stop"
}
export declare enum ICanonWebRemoteLiveEvents {
    FRAME = "frame"
}
