const Discord = require('discord.js')
const Config = require('./Config.js')
const Comands = require('./priv/Main.js')

const client = new Discord.Client()

client.on('ready', () =>{
    console.log('I am ready!')
});

client.on('message', message =>{

    if(message.channel.id === process.env.id_channel_memes || message.channel.id === process.env.id_channel_sugestoes) {
        message.react("👍");
        message.react("👎");
    }

    if(message.author.bot) return                                       // is a bot?
    if(message.content.indexOf(Config.GetConfig().prefix) != 0) return // have prefix?
    
    var comandName = message.content.split(" ")[0].slice(1)
    //var comand = message.content.split(" ") "+say hi"      ->  ['+say','hi']
    //comand = comand[0]                      ['+say','hi']  ->  '+say' 
    //comand = comand.slice(1)                '+say'         ->  'say'
    
    if(comandName === 'say'){
        try{ Comands.Say(message) }
        catch(e){}
    }
    if(comandName === 'channel.hidden'){
        try{
            var haveMember = Comands.channelView(message, false);
            if(haveMember) message.channel.send('sala ocultada de everyone');
            else message.channel.send('sem adm ou permissões modificadas');
        }catch(e){}
    }
    if(comandName === 'channel.open'){
        try{
            var haveMember = Comands.channelView(message, true);
            if(haveMember) message.channel.send('sala exposta a everyone');
            else message.channel.send('sem adm ou permissões modificadas');
        catch(e){}
    }
    if(comandName === 'ban'){
        try{
            if(!message.member.roles.has('638783753887416345'))
                return message.reply("Sorry, sem autorização bro");

            var args = message.content.slice(Config.GetConfig().prefix.length).trim().split(/ +/g);
            Comands.banMember(message, args);
            //console.log(Comands);
        }catch(e){}
    }
    if(comandName === 'help'){
        try{
            Comands.help(message);
        }catch(e){}
    }

});


client.login(process.env.bot_token);


