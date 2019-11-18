import Publishable from '../src/publishable'
import { Writable } from 'readable-stream'

function main() {

    const source = new Publishable()

    const sink = new Writable({
        write(chunk: Buffer, _: string, callback: any) {
            console.log(chunk.toString())
            callback()
        }
    })

    source.pipe(sink)

    source.publish('hi there')
    source.publish('face here')
    source.publish(null)

    //=> hi there
    //=> face here
}

main()
