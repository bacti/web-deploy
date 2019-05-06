import Utils from './Utils'
import Server from './Server'
import RoomServer from './RoomServer'

Server.on('connection', client =>
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
