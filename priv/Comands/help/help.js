const Discord = require('discord.js');
var listComands = require('./listComands.json');

const help = (message) => {

    const embed = new Discord.RichEmbed();

    embed.setColor('#0099ff')
	embed.setTitle('COMANDOS')
	embed.setURL('https://discord.js.org/')
    embed.setAuthor('Rank Bot', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')

    for (var comand in listComands){
        embed.addField(listComands[comand].name, listComands[comand].descript);
        embed.addBlankField();

    }

    embed.setTimestamp()
    embed.setFooter('prefix + comand', '');

    message.author.sendMessage({embed});
    message.channel.send('Enviei para você uma lista dos meus comandos ;)');

    
}

module.exports.help = help;