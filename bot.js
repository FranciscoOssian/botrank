const Discord = require('discord.js')
const Config = require('./Config.js')
const Comands = require('./priv/Main.js')
const Jimp = require('jimp');

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
    
    switch (comandName){
        case 'say':
        {
            Comands.Say(message)
            break;
        }
        case 'channel.hidden':
        {
            var haveMember = Comands.channelView(message, false);
            if(haveMember) message.channel.send('sala ocultada de everyone');
            else message.channel.send('sem adm ou permissões modificadas');
            break;
        }
        case 'channel.open':
        {
            var haveMember = Comands.channelView(message, true);
            if(haveMember) message.channel.send('sala exposta a everyone');
            else message.channel.send('sem adm ou permissões modificadas');
            break;
        }
        case 'ban':{
            if(!message.member.roles.has('638783753887416345'))
            return message.reply("Sorry, sem autorização bro");

            var args = message.content.slice(Config.GetConfig().prefix.length).trim().split(/ +/g);
            Comands.banMember(message, args);
            break;
        }
        case 'help':{
            Comands.help(message);
            break;
        }
        case 'teste':{
            var images = ['timage.jpeg', 'timage2.jpg'];
            var jimps = [];

            for(image of images){
                jimps.push(Jimp.read(image));
            }

            Promise.all(jimps).then(function(data){
                return Promise.all(jimps);
            }).then(function(data){
                data[0].composite(data[1], 0, 0);
                data[0].write('./testef.png');
                //var ata = new Attachment('./testef.png');
                message.channel.send('image:', { files:["./testef.png"] } );
            })
            break;
        }
        default:{
            console.log('erro');
            message.channel.send('error');
        }
    }// switch ends her
    
});


client.login(process.env.bot_token);


