import EventEmitter from 'events';
import { Request } from 'node-fetch';
import { CanonWebRemoteClient } from './client';

export class CanonWebRemoteLive extends EventEmitter {

  private intervalId = null;

  constructor(
    public readonly client: CanonWebRemoteClient,
  ) { super(); }

  async start() {
    if (this.intervalId) return false;

    await this.sendCommand(ICanonWebRemoteLiveCommands.START);

    this.intervalId = setInterval(async () => {
      const imageData = await this.fetchFrameAt(new Date);

      this.emit(ICanonWebRemoteLiveEvents.FRAME, imageData);
    }, this.client.options.liveViewInterval);

    return true;
  }

  async stop() {
    if (!this.intervalId) return false;

    clearInterval(this.intervalId);
    this.intervalId = null;

    await this.sendCommand(ICanonWebRemoteLiveCommands.STOP);

    return true;
  }

  async sendCommand(command: ICanonWebRemoteLiveCommands) {
    const response = await fetch(`${this.client.apiUrl}/lv?cmd=${command}`);

    return await response.json();
  }

  async fetchFrameAt(date: Date = new Date) {
    const dateTime = CanonWebRemoteLive.formatDateTime(date);
    const response = await fetch(`${this.client.apiUrl}/lvgetimg&d=${dateTime}`);

    return await response.blob(); // JPEG blob
  }

  private static formatDateTime(date: Date) {
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

export enum ICanonWebRemoteLiveCommands {
  START = 'start',
  STOP = 'stop',
}

export enum ICanonWebRemoteLiveEvents {
  FRAME = 'frame',
}
