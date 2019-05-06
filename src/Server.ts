const PATH = require('path')
const FS = require('fs-extra')
const express = require('express')
const https = require('https')

import '../constants'
import EventEmitter from './EventEmitter'
const RELEASE = PATH.join(process.cwd(), 'dist')
const universe: any = global

class Server extends EventEmitter
{
    constructor()
    {
        super()
        const app = express()
        const options =
        {
            key: FS.readFileSync(PATH.join(__dirname, 'key.pem')),
            cert: FS.readFileSync(PATH.join(__dirname, 'cert.pem')),
        }
        const handler = https.createServer(options, app)
        handler.listen(universe.SERVER_PORT, evt => console.log(`Listening on ${universe.SERVER_PORT}`))

        if (FS.existsSync(RELEASE))
        {
            app.use((req, res, next) =>
            {
                res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
                next()
            })
            app.use('/', express.static(RELEASE))
        }

        let sio = require('socket.io')(handler, { transports: ['websocket'] })
        sio.on('connection', client => this.emit('connection', client))
    }
}
export default new Server()
