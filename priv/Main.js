const SayModule = require('./Comands/Say.js');
const channelViewModule = require('./Comands/channelView.js');
const banMemberModule = require('./Comands/banMember.js');
const helpModule = require('./Comands/help/help.js');
const wastedModule = require('./Comands/wasted/wasted.js')

var Say = SayModule.Say;
var banMember = banMemberModule.banMember;
var channelView = channelViewModule.channelView;
var help = helpModule.help;
var wasted = wastedModule.wasted;



module.exports.help = help;
module.exports.Say = Say;
module.exports.banMember = banMember;
module.exports.channelView = channelView;
module.exports.wasted = wasted;
