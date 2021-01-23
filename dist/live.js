"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICanonWebRemoteLiveEvents = exports.ICanonWebRemoteLiveCommands = exports.CanonWebRemoteLive = void 0;
const events_1 = __importDefault(require("events"));
class CanonWebRemoteLive extends events_1.default {
    constructor(client) {
        super();
        this.client = client;
        this.intervalId = null;
    }
    async start() {
        if (this.intervalId)
            return false;
        await this.sendCommand(ICanonWebRemoteLiveCommands.START);
        this.intervalId = setInterval(async () => {
            const imageData = await this.fetchFrameAt(new Date);
            this.emit(ICanonWebRemoteLiveEvents.FRAME, imageData);
        }, this.client.options.liveViewInterval);
        return true;
    }
    async stop() {
        if (!this.intervalId)
            return false;
        clearInterval(this.intervalId);
        this.intervalId = null;
        await this.sendCommand(ICanonWebRemoteLiveCommands.STOP);
        return true;
    }
    async sendCommand(command) {
        const response = await fetch(`${this.client.apiUrl}/lv?cmd=${command}`);
        return await response.json();
    }
    async fetchFrameAt(date = new Date) {
        const dateTime = CanonWebRemoteLive.formatDateTime(date);
        const response = await fetch(`${this.client.apiUrl}/lvgetimg&d=${dateTime}`);
        return await response.blob(); // JPEG blob
    }
    static formatDateTime(date) {
        return date.getFullYear()
            + "-"
            + ("00" + (date.getMonth() + 1)).slice(-2)
            + "-"
            + ("00" + date.getDate()).slice(-2)
            + "T"
            + ("00" + date.getHours()).slice(-2)
            + ":"
            + ("00" + date.getMinutes()).slice(-2)
            + ":"
            + ("00" + date.getSeconds()).slice(-2)
            + ("000" + date.getMilliseconds()).slice(-3);
    }
}
exports.CanonWebRemoteLive = CanonWebRemoteLive;
var ICanonWebRemoteLiveCommands;
(function (ICanonWebRemoteLiveCommands) {
    ICanonWebRemoteLiveCommands["START"] = "start";
    ICanonWebRemoteLiveCommands["STOP"] = "stop";
})(ICanonWebRemoteLiveCommands = exports.ICanonWebRemoteLiveCommands || (exports.ICanonWebRemoteLiveCommands = {}));
var ICanonWebRemoteLiveEvents;
(function (ICanonWebRemoteLiveEvents) {
    ICanonWebRemoteLiveEvents["FRAME"] = "frame";
})(ICanonWebRemoteLiveEvents = exports.ICanonWebRemoteLiveEvents || (exports.ICanonWebRemoteLiveEvents = {}));
