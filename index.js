require("dotenv").config()
const { Client } = require('discord.js')

const bot = new Client()

bot.on('ready', () => {console.log('bot live....')})

bot.on('message', (message) => {
   //reply etc goes here 
})

bot.login(process.env.DISCORDJS_BOT)