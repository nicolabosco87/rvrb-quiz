require('dotenv').config()
import WebSocket from 'ws';

// const url = `wss://app.rvrb.one/ws-bot?apiKey=${process.env.apikey}`
const url = `wss://app.rvrb.one/ws-bot?apiKey=${process.env.apikey}`

let channelId: number | null = null; // "any-every"; // process.env.apikey; // null
const password = process.env.password || null

let ws: WebSocket;
let latency = 0
const reconnect = true
let joinId: number 

type JoinRequest = {
  method: string,
  params: {
    channelId: number | null
    password?: string 
  },
  id: number
}

// attempt to join my channel
const join = () => {
  joinId = Math.round(Math.random() * 100) // provide an id to get a response
  const joinRequest: JoinRequest = {
    method: 'join',
    params: {
      channelId,
    },
    id: joinId
  }
  if (password) {
    joinRequest.params.password = password
  }
  ws.send(JSON.stringify(joinRequest))
}

// event handlers for the WebSocket connection
// these are called when the server sends a message
// with a method that matches the key
const eventHandlers = {
  keepAwake: (data: any) => {
    // keep awake is like a ping but also used to measure latency
    latency = data.params.latency
    console.log(`Latency: ${latency}ms`)
    // send a stayAwake message back to the server
    // if the server doesn't receive a stayAwake message 3 times in a row
    // the server will close the connection
    ws.send(JSON.stringify({
      jsonrpc: '2.0',
      method: 'stayAwake',
      params: {
        date: Date.now()
      }
    }))
  },
  ready: (data: any) => {
    if ('channelId' in data.params) {
      channelId = data.params.channelId
      join() // server sends ready when it's ready to receive commands
    }
  },
  pushChannelMessage: (data: any) => {
    // received a chat message from the channel
    // this is where you would handle commands
    console.log(`Received message from channel: ${data.params.message}`)
  },
  pushNotification: (data: any) => {
    // received a notification from the channel
    // this is where you would handle notifications
    console.log(`Received notification from channel: ${data.params.message}`)
  },
  updateChannel: (data: any) => {
    // received an update to the channel
    // this is where you would handle updates
    console.log(`Received update from channel: ${data.params.message}`)
  },
  updateChannelUsers: (data: any) => {
    // received an update to the channel users (join, leave, etc)
    // this is where you would handle updates
    console.log(`Received update from channel users: ${data.params.message}`)

    setTimeout(() => {
      ws.send(JSON.stringify({
        jsonrpc: '2.0',
        method: 'pushMessage',
        "params": { "payload":"Test","flair":null}
      }))
    }, 1000)
  },
  updateChannelUser: (data: any) => {
    // received an update to a channel user (change display name, etc)
    // this is where you would handle updates
    console.log(`Received update from channel user: ${data.params.message}`)
  },
  updateChannelDjs: (data: any) => {
    // received an update to the channel djs (add, remove, etc)
    // this is where you would handle updates
    console.log(`Received update from channel djs: ${data.params.message}`)
  },
  updateChannelMeter: (data: any) => {
    // received a voting update
    // this is where you would handle updates
    console.log(`Received update from channel meter: ${data.params.message}`)
  },
  updateChannelUserStatus: (data: any) => {
    // received an update to a channel user's status (mute, block, afk, typing)
    // this is where you would handle updates
    console.log(`Received update from channel user status: ${data.params.message}`)
  },
  leaveChannel: (data: any) => {
    // received a leave channel message
    // this command instructs the bot to leave the channel, nicely
    // this is where you would handle updates
    console.log(`Received leave channel message: ${data.params.message}`)
  },
  playChannelTrack: (data: any) => {
    // received a play track message
    // this is sent when a new track is playing
    console.log(`Received play track message: ${data.params.message}`)
  },
  pauseChannelTrack: (data: any) => {
    // received a pause track message
    // this is sent when a track is paused
    console.log(`Received pause track message: ${data.params.message}`)
  }
}

const connect = () => {
  // attempt to connect to the WebSocket server
  ws = new WebSocket(url)

  ws.on('open', () => {
    console.log('Connected to server')
  })

  ws.on('close', (e) => {
    console.log('Disconnected from server')
    console.dir(e);
    // reconnect?
    if (reconnect) {
      setTimeout(() => {
        connect()
      }, 1000)
    }
  })

  ws.on('error', (error) => {
    console.error(`WebSocket error: ${error}`)
  })

  ws.on('message', (data: any) => {
    console.log(`Received message: ${data}`)
    try {
      data = JSON.parse(data)
    } catch (e) {
      console.error(`Error parsing JSON: ${e}`)
      return
    }
    // wait for the ready message before sending anything else
    if (data.method in eventHandlers) {
      (eventHandlers as any)[data.method](data)
    } else if (data.id === joinId) {
      // was join a success?
      if (data.error) {
        console.error(`Error joining channel: ${data.error.message}`)
      } else {
        console.log(`Joined channel ${channelId}`)
      }
    }
  })

  ws.on('ping', () => {
    console.log('Received ping from server')
    ws.pong()
  })

  ws.on('pong', () => {
    console.log('Received pong from server')
    ws.ping()
  })
}

connect()
