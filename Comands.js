const Say = (message) => {
    message.channel.send(message.content.slice(4))
    message.delete().catch(O_o=>{}); 
}

module.exports.Say = Say

const NewHome = (message) => {

}

const SetPrefix = (prefix) => {
    Config.SetPrefix(prefix);
}
module.exports.SetPrefix = SetPrefix
