
publishable [![Build status](https://travis-ci.org/strong-roots-capital/publishable.svg?branch=master)](https://travis-ci.org/strong-roots-capital/publishable) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/publishable.svg)](https://npmjs.org/package/@strong-roots-capital/publishable) [![codecov](https://codecov.io/gh/strong-roots-capital/publishable/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/publishable)
============================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Publishable (Readable) stream

Motivation
----------

This package is an experiment to provide a Readable-stream with push functionality.

But wait, `push()` is already the [cornerstone](https://github.com/substack/stream-handbook/blob/master/readme.markdown#creating-a-readable-stream) of Readable streams! Unfortunately the true `push` functionality is only available when all data is known (and buffered!) before the Readable is piped to a sink, otherwise you'll get a `read() not implemented` error. If either of these conditions is impossible, you're required to find a way to offer data up for the `read()` function, which at times is unwieldy, if only conceptually.

Sometimes it is easier to publish chunks when they become known, e.g. with EventEmitters or Observables. `Publishable` extends an ordinary `Readable` stream to offer `publish(chunk: T \| null)` in stead of `read(size?: number)`. `Publishable` will buffer chunks in the event of back-pressure, although that should be kept to a minimum.

Install
-------

```shell
npm install @strong-roots-capital/publishable
```

Use
---

```typescript
import Publishable from '@strong-roots-capital/publishable'
const source = new Publishable()

const sink = new Writable({
    write(chunk: Buffer, _: string, callback: any) {
        console.log(chunk.toString())
        callback()
    }
})

source.publish('hi there')
source.publish('face here')
source.publish(null)

source.pipe(sink)
```

Note that `objectMode` is supported as are all other `_Readable.ReadableOptions`

```typescript
const source = new Publishable({objectMode: true})
```

Generics are also accepted to a limited extent (they do not carry over `pipe`s)

```typescript
const source = new Publishable<FancyObject>({objectMode: true})
```

Related
-------

For more experiments with streams, check out the following projects

*   [pull-stream](https://github.com/pull-stream/pull-stream)
*   [push-stream](https://github.com/push-stream/push-stream)

Do note they are not compatible with node's built-in streams.

## Index

### Classes

* [Publishable](classes/publishable.md)

---

