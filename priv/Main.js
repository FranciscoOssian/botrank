const SayModule = require('./Comands/Say.js');
const channelViewModule = require('./Comands/channelView.js');
const banMemberModule = require('./Comands/banMember.js');
const helpModule = require('./Comands/help/help.js');

var Say = SayModule.Say;
var banMember = banMemberModule.banMember;
var channelView = channelViewModule.channelView;
var help = helpModule.help;



module.exports.help = help;
module.exports.Say = Say;
module.exports.banMember = banMember;
module.exports.channelView = channelView;