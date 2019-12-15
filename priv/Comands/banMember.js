
const banMember = (message, args) => {
    //thanks https://gist.github.com/eslachance/3349734a98d30011bb202f47342601d3
    
    var member = message.mentions.members.first();
    if(!member) return message.reply("por favor menciona um usuário válido do servidor");
    if(!member.bannable) return message.reply(' não consigo banir este usuário');

    var reason = args.slice(1).join(' ');
    if(!reason) reason = "sem razão fornecida";

    member.ban(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));

    message.reply(`${member.user.tag} foi banido por ${message.author.tag} sendo a razão: ${reason}`);
}

module.exports.banMember = banMember;
