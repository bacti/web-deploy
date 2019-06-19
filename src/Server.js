const PATH = require('path')
const FS = require('fs-extra')
const express = require('express')
const http = require('http')

require('../dist/constants')
const EventEmitter = require('./EventEmitter')
const Utils = require('./Utils')
const RoomServer = require('./RoomServer')
const RELEASE = PATH.join(__dirname, '../dist')
const universe = global

class Server extends EventEmitter
{
    constructor()
    {
        super()
        const app = express()
        const handler = http.createServer(app)
        handler.listen(universe.SERVER_PORT, evt => console.log(`Listening on ${universe.SERVER_PORT}`))

        console.log(RELEASE)
        if (FS.existsSync(RELEASE))
        {
            console.log('bacti')
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
        app.get('/', (req, res) =>
        {
            res.send('Hello World!!\n')
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

