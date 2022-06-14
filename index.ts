import DiscorsJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const Client = new DiscorsJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

Client.once('ready', () => {
    console.log(Client.user?.username + " est prêt")
})

Client.on('messageCreate', (message) => {
    if(message.content === 'ping'){
        message.channel.send("pong")
    }
})

Client.login(process.env.TOKEN)