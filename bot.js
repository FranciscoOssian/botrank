
const Discord = require('discord.js');
const Config = require('./Config.js')

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
  //var comand = message.content.split(" ") "+say hi"      ->  ['+say','hi']
  //comand = comand[0]                      ['+say','hi']  ->  '+say' 
  //comand = comand.slice(1)                '+say'         ->  'say'
    
  if(comandName === 'say'){
      message.delete().catch(O_o=>{}); 
      message.channel.send(message.content.slice(4))
    }
  
  if(comandName === 'dance'){
    message.channel.send('\o\')
      .then((msg) => {
      var i
      for(i = 0; i < 20; ++i){
        setTimeout(function() {
          if(i%2 == 0){ msg.edit('/o/');}
          else {msg.edit('\o\');}
        }, 1000)});
      }
  }
  
  
});


client.login(process.env.bot_token);
