require("dotenv").config()
const { Client } = require('discord.js')

const bot = new Client()

bot.on('ready', () => {console.log('bot live....')})

bot.on('message', (message) => {
   if(message.content.length > 0){
        setTimeout(() => message.channel.send("hey guys"), 5000)
   } 
})

bot.login(process.env.DISCORDJS_BOT)