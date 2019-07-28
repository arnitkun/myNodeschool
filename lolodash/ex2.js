var _ = require('lodash');
var worker = function(list){
    list = _.sortBy(list, 'quantity');
    return list.reverse();
    // return list;
}
module.exports = worker;