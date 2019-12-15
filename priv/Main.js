const SayModule = require('./Comands/Say.js');
const channelViewModule = require('./Comands/channelView.js');
const banMemberModule = require('./Comands/banMember.js');

var Say = SayModule.Say;
var banMember = banMemberModule.banMember;
var channelView = channelViewModule.channelView;




module.exports.Say = Say;
module.exports.banMember = banMember;
module.exports.channelView = channelView;
