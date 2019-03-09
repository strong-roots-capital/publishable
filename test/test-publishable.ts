import test from 'ava'
import { Writable } from 'readable-stream'
import isArraySorted from 'is-array-sorted'

/**
 * Library under test
 */

import Publishable from '../src/publishable'


test.cb('should function as a readable stream', t => {
    const source = new Publishable()

    const sunk: string[] = []
    const sink = new Writable({
        write(chunk: Buffer, _: string, callback: any) {
            sunk.push(chunk.toString())
            callback()
        }
    })

    source.pipe(sink)

    setImmediate(() => {source.publish('immediate')})
    setTimeout(() => {source.publish('finale')}, 100)
    setTimeout(() => {source.publish(null)}, 110)
    source.publish('hi there')
    source.publish('face here')

    sink.on('finish', () => {
        t.deepEqual(sunk, ['hi there', 'face here', 'immediate', 'finale'])
        t.end()
    })
})

test.cb('should allow objectMode = true', t => {

    interface Objadillo {
        arms: number
        legs: number
    }
    const source = new Publishable({objectMode: true})

    const sunk: Objadillo[] = []
    const sink = new Writable({
        objectMode: true,
        write(chunk: Objadillo, _: string, callback: any) {
            sunk.push(chunk)
            callback()
        }
    })

    source.pipe(sink)

    const obi: Objadillo = {arms: 4, legs: 2}
    source.publish(obi)
    source.publish(null)

    sink.on('finish', () => {
        t.deepEqual(sunk, [obi])
        t.end()
    })
})

test.cb('should not drop any elements', t => {

    const source = new Publishable()

    const sunk: number[] = []
    const sink = new Writable({
        // objectMode: true,
        write(chunk: Buffer, _: string, callback: any) {
            sunk.push(parseInt(chunk.toString()))
            callback()
        }
    })


    source.pipe(sink)
    setImmediate(() => {source.publish('3')})
    setTimeout(() => {source.publish('4')}, 100)
    setTimeout(() => {
        for (let i = 5; i < 100; ++i) {
            source.publish(i.toString())
        }
    }, 110)
    setTimeout(() => {source.publish(null)}, 200)

    source.publish('0')
    source.publish('1')
    source.publish('2')

    sink.on('finish', () => {
        t.deepEqual(Array.from(Array(100).keys()), sunk)
        t.end()
    })
})

test.cb('should not publish any chunks after null', t => {
    interface Objadillo {
        arms: number
        legs: number
    }
    const source = new Publishable({objectMode: true})

    const sunk: Objadillo[] = []
    const sink = new Writable({
        objectMode: true,
        write(chunk: Objadillo, _: string, callback: any) {
            sunk.push(chunk)
            callback()
        }
    })

    source.pipe(sink)

    const obi: Objadillo = {arms: 4, legs: 2}
    source.publish(obi)
    source.publish(null)
    source.publish(obi)

    sink.on('finish', () => {
        setTimeout(() => {
            t.deepEqual(sunk, [obi])
            t.end()
        }, 100)
    })
})

test.cb('should preserve order of publication', t => {

    const source = new Publishable<string>()

    const sunk: number[] = []
    const sink = new Writable({
        write(chunk: Buffer, _: string, callback: any) {
            sunk.push(parseInt(chunk.toString()))
            callback()
        }
    })

    source.pipe(sink)

    function doit(n: number) {
        // console.log(n)
        source.publish(n.toString())
    }

    function again(count: number) {
        count += 1
        setImmediate(() => {doit(count+0)})
        count += 1
        setImmediate(() => {doit(count+1)})
        count += 1
        setImmediate(() => {doit(count+2)})
        count += 1
        setImmediate(() => {doit(count+3)})
        count += 1
        setImmediate(() => {doit(count+4)})
        count += 1
        setImmediate(() => {doit(count+5)})
        if (count < 50) {
            setTimeout(() => {again(count)}, 1)
        } else {
            setTimeout(() => {source.publish(null)}, 10)
        }
    }
    again(0)

    sink.on('finish', () => {
        t.true(isArraySorted(sunk))
        t.end()
    })
})
