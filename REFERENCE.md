[canon-web-remote](../README.md) / [Exports](../modules.md) / CanonWebRemoteClient

# Class: CanonWebRemoteClient

## Hierarchy

* *EventEmitter*

  ↳ **CanonWebRemoteClient**

## Table of contents

### Constructors

- [constructor](canonwebremoteclient.md#constructor)

### Properties

- [cookies](canonwebremoteclient.md#cookies)
- [defaultOptions](canonwebremoteclient.md#defaultoptions)
- [isPolling](canonwebremoteclient.md#ispolling)
- [liveView](canonwebremoteclient.md#liveview)
- [options](canonwebremoteclient.md#options)
- [rawProperties](canonwebremoteclient.md#rawproperties)
- [rawPropertyMap](canonwebremoteclient.md#rawpropertymap)
- [sequence](canonwebremoteclient.md#sequence)
- [timeoutCount](canonwebremoteclient.md#timeoutcount)
- [captureRejectionSymbol](canonwebremoteclient.md#capturerejectionsymbol)
- [captureRejections](canonwebremoteclient.md#capturerejections)
- [defaultMaxListeners](canonwebremoteclient.md#defaultmaxlisteners)
- [errorMonitor](canonwebremoteclient.md#errormonitor)

### Accessors

- [apertureMode](canonwebremoteclient.md#aperturemode)
- [apertureModeEnabled](canonwebremoteclient.md#aperturemodeenabled)
- [apertureValue](canonwebremoteclient.md#aperturevalue)
- [apertureValueEnabled](canonwebremoteclient.md#aperturevalueenabled)
- [apiUrl](canonwebremoteclient.md#apiurl)
- [assignableButtons](canonwebremoteclient.md#assignablebuttons)
- [com](canonwebremoteclient.md#com)
- [gainControlMode](canonwebremoteclient.md#gaincontrolmode)
- [gainControlModeEnabled](canonwebremoteclient.md#gaincontrolmodeenabled)
- [gainControlValue](canonwebremoteclient.md#gaincontrolvalue)
- [gainControlValueEnabled](canonwebremoteclient.md#gaincontrolvalueenabled)
- [isFocusAuto](canonwebremoteclient.md#isfocusauto)
- [isNdFilterAuto](canonwebremoteclient.md#isndfilterauto)
- [isRecording](canonwebremoteclient.md#isrecording)
- [recordingMinutesLeftOnCompactFlashCard](canonwebremoteclient.md#recordingminutesleftoncompactflashcard)
- [recordingMinutesLeftOnSdCard](canonwebremoteclient.md#recordingminutesleftonsdcard)
- [selectedCompactFlashCardSlot](canonwebremoteclient.md#selectedcompactflashcardslot)
- [selectedSdCardSlot](canonwebremoteclient.md#selectedsdcardslot)
- [shutterSpeedMode](canonwebremoteclient.md#shutterspeedmode)
- [shutterSpeedModeEnabled](canonwebremoteclient.md#shutterspeedmodeenabled)
- [shutterSpeedValue](canonwebremoteclient.md#shutterspeedvalue)
- [shutterSpeedValueEnabled](canonwebremoteclient.md#shutterspeedvalueenabled)
- [timecode](canonwebremoteclient.md#timecode)
- [whiteBalanceMode](canonwebremoteclient.md#whitebalancemode)
- [whiteBalanceModeEnabled](canonwebremoteclient.md#whitebalancemodeenabled)
- [whiteBalanceValue](canonwebremoteclient.md#whitebalancevalue)
- [whiteBalanceValueEnabled](canonwebremoteclient.md#whitebalancevalueenabled)
- [zoomPosition](canonwebremoteclient.md#zoomposition)
- [zoomSpeed](canonwebremoteclient.md#zoomspeed)
- [zoomStatus](canonwebremoteclient.md#zoomstatus)

### Methods

- [addListener](canonwebremoteclient.md#addlistener)
- [connect](canonwebremoteclient.md#connect)
- [disableAutoAperture](canonwebremoteclient.md#disableautoaperture)
- [disableAutoFocus](canonwebremoteclient.md#disableautofocus)
- [disableAutoGain](canonwebremoteclient.md#disableautogain)
- [disableAutoNdFilter](canonwebremoteclient.md#disableautondfilter)
- [disconnect](canonwebremoteclient.md#disconnect)
- [emit](canonwebremoteclient.md#emit)
- [enableAutoAperture](canonwebremoteclient.md#enableautoaperture)
- [enableAutoFocus](canonwebremoteclient.md#enableautofocus)
- [enableAutoGain](canonwebremoteclient.md#enableautogain)
- [enableAutoNdFilter](canonwebremoteclient.md#enableautondfilter)
- [enableAutoShutter](canonwebremoteclient.md#enableautoshutter)
- [eventNames](canonwebremoteclient.md#eventnames)
- [fetch](canonwebremoteclient.md#fetch)
- [fetchLensDriveUpdate](canonwebremoteclient.md#fetchlensdriveupdate)
- [fetchLogin](canonwebremoteclient.md#fetchlogin)
- [fetchPropertyOptions](canonwebremoteclient.md#fetchpropertyoptions)
- [fetchPropertyUpdate](canonwebremoteclient.md#fetchpropertyupdate)
- [fetchUpdates](canonwebremoteclient.md#fetchupdates)
- [getApertureValueOptions](canonwebremoteclient.md#getaperturevalueoptions)
- [getGainOptions](canonwebremoteclient.md#getgainoptions)
- [getMaxListeners](canonwebremoteclient.md#getmaxlisteners)
- [getShutterModeOptions](canonwebremoteclient.md#getshuttermodeoptions)
- [getShutterValueOptions](canonwebremoteclient.md#getshuttervalueoptions)
- [getWhiteBalanceModeOptions](canonwebremoteclient.md#getwhitebalancemodeoptions)
- [getWhiteBalanceValueOptions](canonwebremoteclient.md#getwhitebalancevalueoptions)
- [handleResponseError](canonwebremoteclient.md#handleresponseerror)
- [listenerCount](canonwebremoteclient.md#listenercount)
- [listeners](canonwebremoteclient.md#listeners)
- [off](canonwebremoteclient.md#off)
- [on](canonwebremoteclient.md#on)
- [once](canonwebremoteclient.md#once)
- [poll](canonwebremoteclient.md#poll)
- [prependListener](canonwebremoteclient.md#prependlistener)
- [prependOnceListener](canonwebremoteclient.md#prependoncelistener)
- [pushAssignableButton](canonwebremoteclient.md#pushassignablebutton)
- [rawListeners](canonwebremoteclient.md#rawlisteners)
- [refresh](canonwebremoteclient.md#refresh)
- [removeAllListeners](canonwebremoteclient.md#removealllisteners)
- [removeListener](canonwebremoteclient.md#removelistener)
- [setApertureValue](canonwebremoteclient.md#setaperturevalue)
- [setGain](canonwebremoteclient.md#setgain)
- [setMaxListeners](canonwebremoteclient.md#setmaxlisteners)
- [setShutterMode](canonwebremoteclient.md#setshuttermode)
- [setShutterValue](canonwebremoteclient.md#setshuttervalue)
- [setWhiteBalanceMode](canonwebremoteclient.md#setwhitebalancemode)
- [setWhiteBalanceValue](canonwebremoteclient.md#setwhitebalancevalue)
- [setZoomStep](canonwebremoteclient.md#setzoomstep)
- [startRecording](canonwebremoteclient.md#startrecording)
- [stepFocusFurther](canonwebremoteclient.md#stepfocusfurther)
- [stepFocusNearer](canonwebremoteclient.md#stepfocusnearer)
- [stepZoomBack](canonwebremoteclient.md#stepzoomback)
- [stepZoomForward](canonwebremoteclient.md#stepzoomforward)
- [stopRecording](canonwebremoteclient.md#stoprecording)
- [toggleAutoFocus](canonwebremoteclient.md#toggleautofocus)
- [toggleAutoNdFilter](canonwebremoteclient.md#toggleautondfilter)
- [toggleRecording](canonwebremoteclient.md#togglerecording)
- [updateNextClipMetadata](canonwebremoteclient.md#updatenextclipmetadata)
- [listenerCount](canonwebremoteclient.md#listenercount)
- [on](canonwebremoteclient.md#on)
- [once](canonwebremoteclient.md#once)

## Constructors

### constructor

\+ **new CanonWebRemoteClient**(`options?`: *Partial*<ICanonWebRemoteClientOptions\>): [*CanonWebRemoteClient*](canonwebremoteclient.md)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`options` | *Partial*<ICanonWebRemoteClientOptions\> | ... |

**Returns:** [*CanonWebRemoteClient*](canonwebremoteclient.md)

Defined in: src/client.ts:105

## Properties

### cookies

• `Private` **cookies**: { [key: string]: *string*;  }

Defined in: src/client.ts:26

___

### defaultOptions

• `Readonly` **defaultOptions**: *Partial*<ICanonWebRemoteClientOptions\>

Defined in: src/client.ts:97

___

### isPolling

• `Private` **isPolling**: *boolean*= false

Defined in: src/client.ts:30

___

### liveView

• `Readonly` **liveView**: *CanonWebRemoteLive*

Defined in: src/client.ts:95

___

### options

• `Readonly` **options**: *Partial*<ICanonWebRemoteClientOptions\>

___

### rawProperties

• `Private` `Readonly` **rawProperties**: ICanonWebRemotePropsResponse

Defined in: src/client.ts:34

___

### rawPropertyMap

• `Private` `Readonly` **rawPropertyMap**: { `Oav`: () => *boolean* ; `Ogcv`: () => *boolean* ; `Ossv`: () => *boolean* ; `Owbv`: () => *boolean* ; `Ozoom`: () => *boolean* ; `com`: () => *boolean* ; `fbtn`: () => *boolean* ; `nbtn`: () => *boolean* ; `rec`: () => *boolean*  }

#### Type declaration:

Name | Type |
------ | ------ |
`Oav` | () => *boolean* |
`Ogcv` | () => *boolean* |
`Ossv` | () => *boolean* |
`Owbv` | () => *boolean* |
`Ozoom` | () => *boolean* |
`com` | () => *boolean* |
`fbtn` | () => *boolean* |
`nbtn` | () => *boolean* |
`rec` | () => *boolean* |

Defined in: src/client.ts:81

___

### sequence

• **sequence**: *number*= 0

Defined in: src/client.ts:27

___

### timeoutCount

• `Private` **timeoutCount**: *number*= 0

Defined in: src/client.ts:28

___

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](canonwebremoteclient.md#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:38

___

### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:44

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:45

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](canonwebremoteclient.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:37

## Accessors

### apertureMode

• **apertureMode**(): *string*

**Returns:** *string*

Defined in: src/client.ts:46

___

### apertureModeEnabled

• **apertureModeEnabled**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:45

___

### apertureValue

• **apertureValue**(): *string*

**Returns:** *string*

Defined in: src/client.ts:48

___

### apertureValueEnabled

• **apertureValueEnabled**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:47

___

### apiUrl

• **apiUrl**(): *string*

**Returns:** *string*

Defined in: src/client.ts:32

___

### assignableButtons

• **assignableButtons**(): *any*[]

**Returns:** *any*[]

Defined in: src/client.ts:71

___

### com

• **com**(): *number*

**Returns:** *number*

Defined in: src/client.ts:69

___

### gainControlMode

• **gainControlMode**(): *string*

**Returns:** *string*

Defined in: src/client.ts:61

___

### gainControlModeEnabled

• **gainControlModeEnabled**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:60

___

### gainControlValue

• **gainControlValue**(): *string*

**Returns:** *string*

Defined in: src/client.ts:63

___

### gainControlValueEnabled

• **gainControlValueEnabled**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:62

___

### isFocusAuto

• **isFocusAuto**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:66

___

### isNdFilterAuto

• **isNdFilterAuto**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:65

___

### isRecording

• **isRecording**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:67

___

### recordingMinutesLeftOnCompactFlashCard

• **recordingMinutesLeftOnCompactFlashCard**(): *number*

**Returns:** *number*

Defined in: src/client.ts:39

___

### recordingMinutesLeftOnSdCard

• **recordingMinutesLeftOnSdCard**(): *number*

**Returns:** *number*

Defined in: src/client.ts:37

___

### selectedCompactFlashCardSlot

• **selectedCompactFlashCardSlot**(): *string*

**Returns:** *string*

Defined in: src/client.ts:38

___

### selectedSdCardSlot

• **selectedSdCardSlot**(): *string*

**Returns:** *string*

Defined in: src/client.ts:36

___

### shutterSpeedMode

• **shutterSpeedMode**(): *string*

**Returns:** *string*

Defined in: src/client.ts:56

___

### shutterSpeedModeEnabled

• **shutterSpeedModeEnabled**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:55

___

### shutterSpeedValue

• **shutterSpeedValue**(): *string*

**Returns:** *string*

Defined in: src/client.ts:58

___

### shutterSpeedValueEnabled

• **shutterSpeedValueEnabled**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:57

___

### timecode

• **timecode**(): *string*

**Returns:** *string*

Defined in: src/client.ts:68

___

### whiteBalanceMode

• **whiteBalanceMode**(): *string*

**Returns:** *string*

Defined in: src/client.ts:51

___

### whiteBalanceModeEnabled

• **whiteBalanceModeEnabled**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:50

___

### whiteBalanceValue

• **whiteBalanceValue**(): *string*

**Returns:** *string*

Defined in: src/client.ts:53

___

### whiteBalanceValueEnabled

• **whiteBalanceValueEnabled**(): *boolean*

**Returns:** *boolean*

Defined in: src/client.ts:52

___

### zoomPosition

• **zoomPosition**(): *number*

**Returns:** *number*

Defined in: src/client.ts:42

___

### zoomSpeed

• **zoomSpeed**(): *number*

**Returns:** *number*

Defined in: src/client.ts:43

___

### zoomStatus

• **zoomStatus**(): *run* \| *stop*

**Returns:** *run* \| *stop*

Defined in: src/client.ts:41

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*CanonWebRemoteClient*](canonwebremoteclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*CanonWebRemoteClient*](canonwebremoteclient.md)

Defined in: node_modules/@types/node/events.d.ts:57

___

### connect

▸ **connect**(`username`: *string*, `password`: *string*): *Promise*<*void*\>

Starts an active listening connection to the camera

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`username` | *string* | Username configured in the camera settings   |
`password` | *string* | Username set in the camera settings    |

**Returns:** *Promise*<*void*\>

Defined in: src/client.ts:562

___

### disableAutoAperture

▸ **disableAutoAperture**(): *Promise*<*boolean*\>

Sets aperture mode to `Manual`

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:258

___

### disableAutoFocus

▸ **disableAutoFocus**(): *false* \| *Promise*<*boolean*\>

Sends an autofocus toggle command to the
camera if it is enabled

**Returns:** *false* \| *Promise*<*boolean*\>

Defined in: src/client.ts:123

___

### disableAutoGain

▸ **disableAutoGain**(): *Promise*<*boolean*\>

Sets gain mode as `Manual`

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:226

___

### disableAutoNdFilter

▸ **disableAutoNdFilter**(): *false* \| *Promise*<*boolean*\>

Sends a n ND filter toggle command to the camera
*if the local state has automatic nd filters as ENABLED*

**Returns:** *false* \| *Promise*<*boolean*\>

Defined in: src/client.ts:341

___

### disconnect

▸ **disconnect**(): *void*

Stops polling, clears client sessios, effectively ending camera event polling.

Camera takes between 10 and 30s to garbage collect
the previous session and allow a new one.

**Returns:** *void*

Defined in: src/client.ts:575

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:67

___

### enableAutoAperture

▸ **enableAutoAperture**(): *Promise*<*boolean*\>

Sets aperture mode to `Automatic`

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:251

___

### enableAutoFocus

▸ **enableAutoFocus**(): *false* \| *Promise*<*boolean*\>

Sends an autofocus toggle command to the
camera if it is disabled

**Returns:** *false* \| *Promise*<*boolean*\>

Defined in: src/client.ts:115

___

### enableAutoGain

▸ **enableAutoGain**(): *Promise*<*boolean*\>

Sets gain mode as `Automatic`

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:219

___

### enableAutoNdFilter

▸ **enableAutoNdFilter**(): *false* \| *Promise*<*boolean*\>

Sends a n ND filter toggle command to the camera
*if the local state has automatic nd filters as DISABLED*

**Returns:** *false* \| *Promise*<*boolean*\>

Defined in: src/client.ts:333

___

### enableAutoShutter

▸ **enableAutoShutter**(): *Promise*<*boolean*\>

Sets shutter mode as `Automatic`

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:291

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:72

___

### fetch

▸ **fetch**(`path`: *string*, `options?`: RequestInit): *Promise*<*Response*\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`path` | *string* | - |
`options` | RequestInit | ... |

**Returns:** *Promise*<*Response*\>

Defined in: src/client.ts:413

___

### fetchLensDriveUpdate

▸ **fetchLensDriveUpdate**(`propertyId`: ICanonWebRemoteLensProperties, `value`: *string*): *Promise*<*boolean*\>

Sends a lense drive command request to the camera

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`propertyId` | ICanonWebRemoteLensProperties |  |
`value` | *string* |     |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:488

___

### fetchLogin

▸ **fetchLogin**(`username`: *string*, `password`: *string*): *Promise*<*boolean*\>

Attempts a login against camera with given credentials

sets current client cookies if successful

#### Parameters:

Name | Type |
------ | ------ |
`username` | *string* |
`password` | *string* |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:500

___

### fetchPropertyOptions

▸ **fetchPropertyOptions**(`propertyId`: *string*): *Promise*<*string*[]\>

Attemps to fetch an array of possible (string) values for a given property ID

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`propertyId` | *string* |     |

**Returns:** *Promise*<*string*[]\>

Defined in: src/client.ts:459

___

### fetchPropertyUpdate

▸ **fetchPropertyUpdate**(`propertyId`: *string*, `value`: *string*): *Promise*<*boolean*\>

Sends a property update request to the camera

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`propertyId` | *string* |  |
`value` | *string* |     |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:475

___

### fetchUpdates

▸ `Private`**fetchUpdates**(`sequence?`: *number*): *Promise*<ICanonWebRemotePropsResponse\>

Fetches the next batch of updates with the given sequence, or following current one.

**`note`** The response takes around 25ms on a XF205

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`sequence` | *number* | ... | (optionnal) A sequence number. Set to `1` to force a refresh of all data.    |

**Returns:** *Promise*<ICanonWebRemotePropsResponse\>

Defined in: src/client.ts:439

___

### getApertureValueOptions

▸ **getApertureValueOptions**(): *Promise*<*string*[]\>

Retrieves a list of possible Aperture values
for current **mode**

**Returns:** *Promise*<*string*[]\>

Defined in: src/client.ts:266

___

### getGainOptions

▸ **getGainOptions**(): *Promise*<*string*[]\>

Retrieves a list of possible values for sensor gain

(as a list of decimal number strings (`'24.0'` for +24dB))

**Returns:** *Promise*<*string*[]\>

Defined in: src/client.ts:235

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:64

___

### getShutterModeOptions

▸ **getShutterModeOptions**(): *Promise*<*string*[]\>

Retrieves a list of possible shutter modes

**Returns:** *Promise*<*string*[]\>

Defined in: src/client.ts:284

___

### getShutterValueOptions

▸ **getShutterValueOptions**(): *Promise*<*string*[]\>

Retrieves a list of possible shutter speeds or values

Please note that the output of this method will change according to selected **mode**

**Returns:** *Promise*<*string*[]\>

Defined in: src/client.ts:309

___

### getWhiteBalanceModeOptions

▸ **getWhiteBalanceModeOptions**(): *Promise*<*string*[]\>

Retrieves a list of possible white balance modes

**Returns:** *Promise*<*string*[]\>

Defined in: src/client.ts:184

___

### getWhiteBalanceValueOptions

▸ **getWhiteBalanceValueOptions**(): *Promise*<*string*[]\>

Retrieves a list of available white balace value options
from the camera.

Please note that white balance **mode** will change the content of this list.

**Returns:** *Promise*<*string*[]\>

Defined in: src/client.ts:203

___

### handleResponseError

▸ `Private`**handleResponseError**(`status`: *string*): *boolean*

Handles a response error and MAYBE throws an error

#### Parameters:

Name | Type |
------ | ------ |
`status` | *string* |

**Returns:** *boolean*

Defined in: src/client.ts:526

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:68

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:65

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*CanonWebRemoteClient*](canonwebremoteclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*CanonWebRemoteClient*](canonwebremoteclient.md)

Defined in: node_modules/@types/node/events.d.ts:61

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*CanonWebRemoteClient*](canonwebremoteclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*CanonWebRemoteClient*](canonwebremoteclient.md)

Defined in: node_modules/@types/node/events.d.ts:58

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*CanonWebRemoteClient*](canonwebremoteclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*CanonWebRemoteClient*](canonwebremoteclient.md)

Defined in: node_modules/@types/node/events.d.ts:59

___

### poll

▸ `Private`**poll**(): *Promise*<*void*\>

"Recursive" poll method, calling itself after response has been received

**Returns:** *Promise*<*void*\>

Defined in: src/client.ts:542

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*CanonWebRemoteClient*](canonwebremoteclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*CanonWebRemoteClient*](canonwebremoteclient.md)

Defined in: node_modules/@types/node/events.d.ts:70

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*CanonWebRemoteClient*](canonwebremoteclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*CanonWebRemoteClient*](canonwebremoteclient.md)

Defined in: node_modules/@types/node/events.d.ts:71

___

### pushAssignableButton

▸ **pushAssignableButton**(`number`: *number*): *Promise*<*boolean*\>

Simulates a push on one of the cameras assignable buttons

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`number` | *number* | The button identifying number    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:350

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:66

___

### refresh

▸ **refresh**(): *Promise*<*boolean*\>

Fetches next update, applies it to state and emit associated events

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:396

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*CanonWebRemoteClient*](canonwebremoteclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* \| *symbol* |

**Returns:** [*CanonWebRemoteClient*](canonwebremoteclient.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*CanonWebRemoteClient*](canonwebremoteclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*CanonWebRemoteClient*](canonwebremoteclient.md)

Defined in: node_modules/@types/node/events.d.ts:60

___

### setApertureValue

▸ **setApertureValue**(`aperture`: *string*): *Promise*<*boolean*\>

Updates aperture value.

Please not that this method will fail in Auto mode.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`aperture` | *string* | a string from `getApertureValueOptions()`    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:277

___

### setGain

▸ **setGain**(`value`: *string*): *Promise*<*boolean*\>

Updates cameras sensor gain in dB

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | a string value from `getGainOptions()`    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:244

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*CanonWebRemoteClient*](canonwebremoteclient.md)

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*CanonWebRemoteClient*](canonwebremoteclient.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### setShutterMode

▸ **setShutterMode**(`mode`: *string*): *Promise*<*boolean*\>

Updates shutter mode

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mode` | *string* | a string value from `getShutterModeOptions()`    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:300

___

### setShutterValue

▸ **setShutterValue**(`speed`: *string*): *Promise*<*boolean*\>

Updates shutter speed or value

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`speed` | *string* | a string value from `getShutterValueOptions()`    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:318

___

### setWhiteBalanceMode

▸ **setWhiteBalanceMode**(`mode`: *string*): *Promise*<*boolean*\>

Updates the current white balance mode of the camera

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mode` | *string* | string from `getWhiteBalanceModeOptions()`    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:193

___

### setWhiteBalanceValue

▸ **setWhiteBalanceValue**(`value`: *string*): *Promise*<*boolean*\>

Updates the cameras white balance value

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | a string from `getWhiteBalanceValueOptions()` (be careful to **mode**)    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:212

___

### setZoomStep

▸ **setZoomStep**(`step`: *1* \| *2* \| *3* \| *4* \| *5* \| *6*): *Promise*<*boolean*\>

Sends an absolute zoom step command to the camera.

As far as I know, thats is the only absolute way to position zoom.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | *1* \| *2* \| *3* \| *4* \| *5* \| *6* | One of 6 absolute equidistant zoom steps    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:141

___

### startRecording

▸ **startRecording**(): *false* \| *Promise*<*boolean*\>

Sends a recording toggle command to the
camera if recording is not on already

**Returns:** *false* \| *Promise*<*boolean*\>

Defined in: src/client.ts:361

___

### stepFocusFurther

▸ **stepFocusFurther**(`size`: *1* \| *2* \| *3*): *Promise*<*boolean*\>

Steps focus further of the camera

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`size` | *1* \| *2* \| *3* | The step size (small, medium and big)    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:177

___

### stepFocusNearer

▸ **stepFocusNearer**(`size`: *1* \| *2* \| *3*): *Promise*<*boolean*\>

Steps focus nearer of the camera

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`size` | *1* \| *2* \| *3* | The step size (small, medium and big)    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:168

___

### stepZoomBack

▸ **stepZoomBack**(`size`: *1* \| *2* \| *3*): *Promise*<*boolean*\>

Steps the zoom backwards (wide).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`size` | *1* \| *2* \| *3* | The step size (small, medium and big)    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:159

___

### stepZoomForward

▸ **stepZoomForward**(`size`: *1* \| *2* \| *3*): *Promise*<*boolean*\>

Steps the zoom forward (tele).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`size` | *1* \| *2* \| *3* | The step size (small, medium and big)    |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:150

___

### stopRecording

▸ **stopRecording**(): *false* \| *Promise*<*boolean*\>

Sends a recording toggle command to the
camera if recording IS on

**Returns:** *false* \| *Promise*<*boolean*\>

Defined in: src/client.ts:369

___

### toggleAutoFocus

▸ **toggleAutoFocus**(): *Promise*<*boolean*\>

Sends an autofocus toggle command to the camera

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:130

___

### toggleAutoNdFilter

▸ **toggleAutoNdFilter**(): *Promise*<*boolean*\>

Sends a n ND filter toggle command to the camera

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:325

___

### toggleRecording

▸ **toggleRecording**(): *Promise*<*boolean*\>

Sends a recording toggle command to the camera

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:374

___

### updateNextClipMetadata

▸ **updateNextClipMetadata**(`metadata`: ICanonWebRemoteMetadata): *Promise*<*boolean*\>

Sends a new set of metadata to be baked in the next recorded clip

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`metadata` | ICanonWebRemoteMetadata |     |

**Returns:** *Promise*<*boolean*\>

Defined in: src/client.ts:386

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:26

___

### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<*any*\>

Defined in: node_modules/@types/node/events.d.ts:23

___

### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* \| *symbol*): *Promise*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *NodeEventTarget* |
`event` | *string* \| *symbol* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:21

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:22
