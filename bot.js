


// Import the discord.js module
const Discord = require('discord.js');
const Config = require('./Config.js')

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
  
  if(message.author.bot) return
  
  if (message.channel.id === process.env.id_channel_memes || message.channel.id === process.env.id_channel_sugestoes) {
    message.react("👍");
    message.react("👎");
  }
  
  if(message.content.indexOf(Config.GetConfig().prefix) != 0) return
    
    var comandName = message.content.split(" ")[0].slice(1)
    //var comand = message.content.split(" ") "+say hi"      ->  ['+say','hi']
    //comand = comand[0]                      ['+say','hi']  ->  '+say' 
    //comand = comand.slice(1)                '+say'         ->  'say'
    
    if(comandName === 'say'){
        message.delete().catch(O_o=>{}); 
        message.channel.send(message.content.slice(4))
    }
  
  
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.bot_token);
