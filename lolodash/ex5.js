var _ = require("lodash");
    
var worker = function(arguments) {
    // do work; return stuff
    var transformed = _.chain(arguments).sort().map(function(word){
        return ((word+'chained').toUpperCase());
    });
    return transformed;
};

// export the worker function as a nodejs module
module.exports = worker;