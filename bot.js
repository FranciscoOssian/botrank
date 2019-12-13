const Discord = require('discord.js')
const Config = require('./Config.js')
const Comands = require('./Comands.js')

const client = new Discord.Client()

client.on('ready', () =>{
    console.log('I am ready!')
});

client.on('message', message =>{

    if(message.author.bot) return

    if(message.channel.id === process.env.id_channel_memes || message.channel.id === process.env.id_channel_sugestoes) {
        message.react("👍");
        message.react("👎");
    }

    if(message.content.indexOf(Config.GetConfig().prefix) != 0) return
    
    console.log(require('discord.js').version)
    
    var comandName = message.content.split(" ")[0].slice(1)
    //var comand = message.content.split(" ") "+say hi"      ->  ['+say','hi']
    //comand = comand[0]                      ['+say','hi']  ->  '+say' 
    //comand = comand.slice(1)                '+say'         ->  'say'
    
    if(comandName === 'say'){
        Comands.Say(message)
    }
    if(comandName === 'channel.hidden'){
        Comands.channelView(message, false);
        message.channel.send('sala ocultada de everyone');
    }
    if(comandName === 'channel.open'){
        Comands.channelView(message, true);
        message.channel.send('sala exposta a everyone')
    }

});


client.login(process.env.bot_token);
