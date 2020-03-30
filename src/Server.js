const PATH = require('path')
const FS = require('fs-extra')
const express = require('express')
const http = require('http')

const EventEmitter = require('./EventEmitter')
const Utils = require('./Utils')
const RoomServer = require('./RoomServer')
const RELEASE = './docs'
class Server extends EventEmitter
{
    constructor()
    {
        super()
        const app = express()
        const handler = http.createServer(app)
        const SERVER_PORT = global.SERVER_PORT || 1204
        handler.listen(SERVER_PORT, evt => console.log(`Listening on ${SERVER_PORT}`))

        if (FS.existsSync(RELEASE))
        {
            app.use((req, res, next) =>
            {
                res.header('Access-Control-Allow-Origin', '*')
                res.header('Access-Control-Allow-Credentials', 'true')
                res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
                res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
                next()
            })
            app.use('/', express.static(RELEASE))
        }

        app.get('/log', (req, res) =>
        {
            const log = FS.readFileSync(PATH.join(__dirname, '../logs/g4b.log'))
            res.send(log)
        })

        let sio = require('socket.io')(handler)
        sio.on('connection', client => this.emit('connection', client))
    }
}

const server = new Server()
server.on('connection', client =>
{
    client.userid = Utils.uuid
    client.setMaxListeners(0)
    client.emit('connected', { id: client.userid })

    client.on('message', message => RoomServer.OnMessage(client, message))
    client.on('disconnect', evt =>
    {
        console.log(`User ${client.userid} disconnected`)
        if (client.game && client.game.id)
        {
            RoomServer.EndGame(client.game.id, client.userid)
        }
    })
})

