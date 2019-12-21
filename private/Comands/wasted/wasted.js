const Jimp = require('jimp');

wasted = (message, args) => {
    console.log(args);

    if(message.mentions.roles)console.log('oi');

    var user;

    /// por enquanto só da de si mesmo
    //codigo gororoba ainda

    try {
        (args[2].length)

        var userID = args[2];

        userID.splice(0, 2);
        userID.splice(userID.length-1, 1);

        userID = userID.join('');

        user = message.guild.members.get("id", userID);
        user = user.author.avatarURL;
    } catch (error) {
        //console.log(error)
        user = message.author.avatarURL
    }
    

    var images = [user, 'priv/Comands/wasted/wasted.png'];
    var jimps = [];

    for(image of images){
        jimps.push(Jimp.read(image));
    }

    Promise.all(jimps).then(function(data){
        return Promise.all(jimps);
    }).then(function(data){
        data[1].resize(400, 400);
        data[0].resize(400, 400)
            .greyscale()
            .composite(data[1], 0, 0)
            .write('priv/Comands/wasted/wasted_result.png');
        message.channel.send('', { files:["./priv/Comands/wasted/wasted_result.png"] } );
    })

}


module.exports.wasted = wasted;
