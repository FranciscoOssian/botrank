


// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  
  if (message.channel.id === '612006161172004894') {
    message.react("👍");
    message.react("👎");
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.bot_token);
