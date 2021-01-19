Javascript Canon X Series Camcorders Web Remote Client
===

A simple client using the Camera's Web Remote APIs to fetch data and update the configuration, fix focus, monitor zoom, ...

The goal is to provide a simple way to control a camcorder through network (Ethernet or Wifi) for automation and interfacing.

The current package is based on a reverse engineering session of an XF205 camcorder.

## Usage
Install the package...

```sh
yarn add canon-xseries-web-remote
```

... and include in your script.
```ts
import { CanonWebRemoteClient } from 'canon-xseries-web-remote';

const client = new CanonWebRemoteClient({ cameraHost: '192.168.1.50' });

client.on('zoom', position => console.info(`ZOOM ${position} %`));
client.on('aperture', iris => console.info(`APERTURE ${iris}`));

client.connect('username', '12345678');

```

## Camera State

Every update from the camera updates a local state.

Pretty getters are provided on the client instance to access its data in a more friendly manner (ex `client.isFocusAuto === true`)

The `rawProperties` property contains the actual state, with data from the camera directly merged in.

All pretty getter properties are described in this [Typedoc generated documentation](./REFERENCE.md).

## Camera Control

All methods for controlling the camera from the client are described in this [Typedoc generated documentation](./REFERENCE.md).

## Camera Events

It might be useful to listen to some of the camera properties as they are being updated...

All emitted events should include the updated value as first listener argument, and the client instance as second.  

For now dispatched events are the following :

### `zoom`
*Ranges from `0` to `100`*  
Emited any time the camera zoom is moved.

### `shutter`
*Depending on shutter mode, can be an angle (`90`) or a fraction string (`1/200`)*  
Emited any time the camera shutter speed or mode is changed.

### `aperture`
*If in manual mode, a list of f-stop values as string (`1.8`)*  
Emitted any time the aperture value or mode is changed.

### `gain`
*If in manual mode, a list of dB gain values as string (`24.0`)*  
Emitted anytime the gain is updated

### `whiteBalance`
*Depending on white balance mode, can be a Kelvin value (`7200`) or a correction index (`+3`)*
Emitted anytime the white balance value or mode is updated on the camera.

### `recording`
*Either `true` or `false`*  
Emitted anytime the camera recording status changes between `STBY` and `REC`.

### `focusAuto`
*Either `true` or `false`*  
Emitted anytime the autofocus is enabled or disabled on the camera.

### `ndFilterAuto`
*Either `true` or `false`*  
Emitted anytime the auto ND filter feature is enabled or disabled on the camera.

### `com`
*Ranges from `1` to `10` chronologically*  
Not really useful, but funny. Connection indicator corresponding to the 4 blinking dots on the default advanced browser view. Emitted anytime it changes.

## Roadmap

- [x] Reverse engineering the Web Remote APIs
- [x] Implementing major features
- [x] Implementing live view
- [ ] Provide some kind of helpers for zoom, focus, etc ?
- [ ] Package script for Node AND Browser (only Node for now)
- [ ] Push package on NPM