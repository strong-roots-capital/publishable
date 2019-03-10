[publishable](../README.md) > [Publishable](../classes/publishable.md)

# Class: Publishable

Extend a `Readable` stream to allow publishing chunks rather than reading chunks.

## Type parameters
#### T 
## Hierarchy

 `Readable`

**↳ Publishable**

## Implements

* `ReadableStream`

## Index

### Constructors

* [constructor](publishable.md#constructor)

### Properties

* [_readableState](publishable.md#_readablestate)
* [barrier](publishable.md#barrier)
* [destroyed](publishable.md#destroyed)
* [queue](publishable.md#queue)
* [readable](publishable.md#readable)
* [readableHighWaterMark](publishable.md#readablehighwatermark)
* [readableLength](publishable.md#readablelength)
* [defaultMaxListeners](publishable.md#defaultmaxlisteners)

### Methods

* [__@asyncIterator](publishable.md#___asynciterator)
* [_destroy](publishable.md#_destroy)
* [_read](publishable.md#_read)
* [_undestroy](publishable.md#_undestroy)
* [addListener](publishable.md#addlistener)
* [destroy](publishable.md#destroy)
* [emit](publishable.md#emit)
* [eventNames](publishable.md#eventnames)
* [getMaxListeners](publishable.md#getmaxlisteners)
* [isPaused](publishable.md#ispaused)
* [listenerCount](publishable.md#listenercount)
* [listeners](publishable.md#listeners)
* [off](publishable.md#off)
* [on](publishable.md#on)
* [once](publishable.md#once)
* [pause](publishable.md#pause)
* [pipe](publishable.md#pipe)
* [prependListener](publishable.md#prependlistener)
* [prependOnceListener](publishable.md#prependoncelistener)
* [publish](publishable.md#publish)
* [push](publishable.md#push)
* [rawListeners](publishable.md#rawlisteners)
* [read](publishable.md#read)
* [removeAllListeners](publishable.md#removealllisteners)
* [removeListener](publishable.md#removelistener)
* [resume](publishable.md#resume)
* [setEncoding](publishable.md#setencoding)
* [setMaxListeners](publishable.md#setmaxlisteners)
* [unpipe](publishable.md#unpipe)
* [unshift](publishable.md#unshift)
* [wrap](publishable.md#wrap)
* [listenerCount](publishable.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Publishable**(options?: *`_Readable.ReadableOptions`*): [Publishable](publishable.md)

*Overrides Readable.__constructor*

*Defined in [publishable.ts:21](https://github.com/strong-roots-capital/publishable/blob/e195d42/src/publishable.ts#L21)*

Create a Publishable stream.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `_Readable.ReadableOptions` |  Forwarded to Readable constructor without modification |

**Returns:** [Publishable](publishable.md)

___

## Properties

<a id="_readablestate"></a>

###  _readableState

**● _readableState**: *`ReadableState`*

*Inherited from _Readable._readableState*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/readable-stream/index.d.ts:16*

___
<a id="barrier"></a>

###  barrier

**● barrier**: *`function`*

*Defined in [publishable.ts:21](https://github.com/strong-roots-capital/publishable/blob/e195d42/src/publishable.ts#L21)*

#### Type declaration
▸(value?: *`T` \| `undefined`*): `Promise`<`T`[]>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `T` \| `undefined` |

**Returns:** `Promise`<`T`[]>

___
<a id="destroyed"></a>

###  destroyed

**● destroyed**: *`boolean`*

*Inherited from _Readable.destroyed*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/readable-stream/index.d.ts:17*

___
<a id="queue"></a>

###  queue

**● queue**: *(`null` \| `T`)[]* =  []

*Defined in [publishable.ts:20](https://github.com/strong-roots-capital/publishable/blob/e195d42/src/publishable.ts#L20)*

___
<a id="readable"></a>

###  readable

**● readable**: *`boolean`*

*Inherited from Readable.readable*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:20*

___
<a id="readablehighwatermark"></a>

###  readableHighWaterMark

**● readableHighWaterMark**: *`number`*

*Inherited from Readable.readableHighWaterMark*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:21*

___
<a id="readablelength"></a>

###  readableLength

**● readableLength**: *`number`*

*Inherited from Readable.readableLength*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:22*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/events.d.ts:8*

___

## Methods

<a id="___asynciterator"></a>

###  __@asyncIterator

▸ **__@asyncIterator**(): `AsyncIterableIterator`<`any`>

*Inherited from Readable.[Symbol.asyncIterator]*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:95*

**Returns:** `AsyncIterableIterator`<`any`>

___
<a id="_destroy"></a>

###  _destroy

▸ **_destroy**(error: *`Error` \| `null`*, callback: *`function`*): `void`

*Inherited from Readable._destroy*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `Error` \| `null` |
| callback | `function` |

**Returns:** `void`

___
<a id="_read"></a>

###  _read

▸ **_read**(size: *`number`*): `void`

*Inherited from Readable._read*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| size | `number` |

**Returns:** `void`

___
<a id="_undestroy"></a>

###  _undestroy

▸ **_undestroy**(): `void`

*Inherited from _Readable._undestroy*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/readable-stream/index.d.ts:22*

**Returns:** `void`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *"close"*, listener: *`function`*): `this`

▸ **addListener**(event: *"data"*, listener: *`function`*): `this`

▸ **addListener**(event: *"end"*, listener: *`function`*): `this`

▸ **addListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **addListener**(event: *"error"*, listener: *`function`*): `this`

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:46*

Event emitter The defined events on documents including:

1.  close
2.  data
3.  end
4.  readable
5.  error

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:47*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:48*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:49*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:50*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:51*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(err?: *`Error`*, callback?: *`undefined` \| `function`*): `this`

*Inherited from _Readable.destroy*

*Overrides Readable.destroy*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/readable-stream/index.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` err | `Error` |
| `Optional` callback | `undefined` \| `function` |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *"close"*): `boolean`

▸ **emit**(event: *"data"*, chunk: *`any`*): `boolean`

▸ **emit**(event: *"end"*): `boolean`

▸ **emit**(event: *"readable"*): `boolean`

▸ **emit**(event: *"error"*, err: *`Error`*): `boolean`

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:53*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:54*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| chunk | `any` |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:55*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:56*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:57*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| err | `Error` |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:58*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/events.d.ts:23*

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/events.d.ts:19*

**Returns:** `number`

___
<a id="ispaused"></a>

###  isPaused

▸ **isPaused**(): `boolean`

*Inherited from Readable.isPaused*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:29*

**Returns:** `boolean`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/events.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/events.d.ts:20*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/events.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *"close"*, listener: *`function`*): `this`

▸ **on**(event: *"data"*, listener: *`function`*): `this`

▸ **on**(event: *"end"*, listener: *`function`*): `this`

▸ **on**(event: *"readable"*, listener: *`function`*): `this`

▸ **on**(event: *"error"*, listener: *`function`*): `this`

▸ **on**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:60*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:61*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:62*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:63*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:64*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:65*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *"close"*, listener: *`function`*): `this`

▸ **once**(event: *"data"*, listener: *`function`*): `this`

▸ **once**(event: *"end"*, listener: *`function`*): `this`

▸ **once**(event: *"readable"*, listener: *`function`*): `this`

▸ **once**(event: *"error"*, listener: *`function`*): `this`

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:67*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:68*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:69*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:70*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:71*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:72*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `this`

*Inherited from Readable.pause*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:27*

**Returns:** `this`

___
<a id="pipe"></a>

###  pipe

▸ **pipe**<`T`>(destination: *`T`*, options?: *`undefined` \| `object`*): `T`

*Inherited from internal.pipe*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:5*

**Type parameters:**

#### T :  `WritableStream`
**Parameters:**

| Name | Type |
| ------ | ------ |
| destination | `T` |
| `Optional` options | `undefined` \| `object` |

**Returns:** `T`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *"close"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"data"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"end"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"error"*, listener: *`function`*): `this`

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:74*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:75*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:76*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:77*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:78*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:79*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *"close"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"data"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"end"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"error"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:81*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:82*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:83*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:84*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:85*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:86*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="publish"></a>

###  publish

▸ **publish**(chunk: *`T` \| `null`*): `void`

*Defined in [publishable.ts:58](https://github.com/strong-roots-capital/publishable/blob/e195d42/src/publishable.ts#L58)*

Push chunk through the Readable stream.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| chunk | `T` \| `null` |  Data to send through the Readable stream |

**Returns:** `void`

___
<a id="push"></a>

###  push

▸ **push**(chunk: *`any`*, encoding?: *`undefined` \| `string`*): `boolean`

*Inherited from Readable.push*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:33*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` encoding | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/events.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="read"></a>

###  read

▸ **read**(size?: *`undefined` \| `number`*): `any`

*Inherited from Readable.read*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` size | `undefined` \| `number` |

**Returns:** `any`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/events.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *"close"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"data"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"end"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"error"*, listener: *`function`*): `this`

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:88*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:89*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:90*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:91*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:92*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:93*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `this`

*Inherited from Readable.resume*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:28*

**Returns:** `this`

___
<a id="setencoding"></a>

###  setEncoding

▸ **setEncoding**(encoding: *`string`*): `this`

*Inherited from Readable.setEncoding*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| encoding | `string` |

**Returns:** `this`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/events.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="unpipe"></a>

###  unpipe

▸ **unpipe**(destination?: *`NodeJS.WritableStream`*): `this`

*Inherited from Readable.unpipe*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:30*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` destination | `NodeJS.WritableStream` |

**Returns:** `this`

___
<a id="unshift"></a>

###  unshift

▸ **unshift**(chunk: *`any`*): `void`

*Inherited from Readable.unshift*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:31*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |

**Returns:** `void`

___
<a id="wrap"></a>

###  wrap

▸ **wrap**(oldStream: *`ReadableStream`*): `this`

*Inherited from Readable.wrap*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/stream.d.ts:32*

**Parameters:**

| Name | Type |
| ------ | ------ |
| oldStream | `ReadableStream` |

**Returns:** `this`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /home/eric/workspace/strong-roots-capital/publishable/node_modules/@types/node/events.d.ts:7*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

