/**
 * publishable
 * Publishable (Readable) stream
 */

namespace debug {
    export const stream = require('debug')('publishable')
}

import { Readable } from 'readable-stream'
import makeBarrier from '@strong-roots-capital/barrier'


/**
 * Extend a `Readable` stream to allow publishing chunks rather than
 * reading chunks.
 */
export default class Publishable<T = any> extends Readable {

    queue: (T | null)[] = []
    barrier: (value?: T | undefined) => Promise<T[]>

    /**
     * Create a Publishable stream.
     *
     * @param options - Forwarded to Readable constructor without
     * modification
     */
    constructor(options?: _Readable.ReadableOptions) {
        super({
            ...options,
            read() {
                const self: Publishable<T> = this as Publishable<T>
                async function pushChunk() {
                    let chunk = self.queue.shift()
                    debug.stream('Shifted off chunk:', chunk)
                    while (chunk === undefined) {
                        debug.stream('Waiting at barrier')
                        await self.barrier()
                        self.barrier = makeBarrier<T>()
                        chunk = self.queue.shift()
                        debug.stream('Past barrier with chunk', chunk)
                    }
                    debug.stream('Pushing chunk', chunk)
                    self.push(chunk)
                }
                pushChunk()
            }
        })
        this.barrier = makeBarrier<T>()
    }

    /**
     * Push chunk through the Readable stream.
     *
     * @param chunk - Data to send through the Readable stream
     */
    publish(chunk: T | null) {
        debug.stream('publish', chunk)
        this.queue.push(chunk)
        this.barrier()
    }

}
