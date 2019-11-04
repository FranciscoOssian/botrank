


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

client.on('message', async(message) => {
  
  if (message.channel.id === process.env.id_channel_memes || process.env.id_channel_sugestoes) {
    await message.react("👍");
    await message.react("👎");
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.bot_token);
