
const Discord = require('discord.js');
const Config = require('./Config.js')
const Comands = require('./Comands.js')

const client = new Discord.Client();

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
    
  if(comandName === 'say'){
      Comands.Say(message)

    }
  
  
  
  
});


client.login(process.env.bot_token);
