"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const client = new client_1.CanonWebRemoteClient({
    cameraHost: '192.168.1.44',
    cameraPort: 80,
    pollingTimeout: 2000,
    pollingInterval: 100,
    liveViewInterval: 50,
});
// client.on('rawUpdate', (raw, client) => console.log('SEQUENCE ' + client.sequence));
client.on('zoom', position => console.log('ZOOM ' + position));
client.on('record', position => console.log('RECORDING ' + position));
client.on('aperture', position => console.log('APERTURE POSITION ' + position));
(async () => {
    await client.connect('Full', '12345678');
    console.info('CONNECTED');
})();
///api/cam/drivelens
///api/cam/drivelens
