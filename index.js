const Discord = require('discord.js')
const client = new Discord.client()
const config = require('./config.json')

client.on('ready', () => {
    console.log('Ready to attack!')
})

client.login(config.token)