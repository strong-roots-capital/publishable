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

    setImmediate(() => {
        source.publish('immediate')
    })
    setTimeout(() => {source.publish('fin')}, 1000)
    setTimeout(() => {source.publish(null)}, 2000)
    setTimeout(() => {source.publish("you won't see any chunks published after `null`")}, 2500)

    source.publish('hi there')
    source.publish('face here')

    source.pipe(sink)
    //=> hi there
    //=> face here
    //=> immediate
    //=> fin
}

main()
