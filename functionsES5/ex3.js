function duckCount() {
    // SOLUTION GOES HERE
    return Array.prototype.filter.call(arguments, (function(args){
        return Object.prototype.hasOwnProperty.call(args, 'quack');
    })).length;
  }
  
  module.exports = duckCount
