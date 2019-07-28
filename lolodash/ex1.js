var _ = require('lodash');
let list = process.argv.slice(2);
var worker = function(list){
    return _.filter(list, {active: true});
}

module.exports = worker;