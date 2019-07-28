function Spy(target, method) {
    // SOLUTION GOES HERE
    let result = {count:0}
    // let count = 0;
    var func = target[method];
    target[method] = function(){
        result.count++;
        return func.apply(this, arguments);
    }

    return result;
  }
  
  module.exports = Spy