const Jimp = require('jimp');

wasted = (message, args) => {

    /// por enquanto só da de si mesmo
    //codigo gororoba ainda

    var user = message.author.avatarURL;
    
    var images = [user, 'private/Comands/wasted/wasted.png'];
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
        message.channel.send('', { files:["'priv/Comands/wasted/wasted_result.png'"] } );
    })

}


module.exports.wasted = wasted;
