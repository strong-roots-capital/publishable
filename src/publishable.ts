/**
 * publishable
 * Publishable (Readable) stream
 */

import { Readable } from 'readable-stream'


/**
 * Extend a `Readable` stream to allow publishing chunks rather than
 * reading chunks.
 */
export default class Publishable<T = any> extends Readable {

    /**
     * Create a Publishable stream.
     *
     * @param options - Forwarded to Readable constructor without
     * modification
     */
    constructor(options?: _Readable.ReadableOptions) {
        super({
            ...options,
            read() {}
        })
    }

    /**
     * Push chunk through the Readable stream.
     *
     * @param chunk - Data to send through the Readable stream
     */
    publish(chunk: T | null) {
        this.push(chunk)
    }
}
