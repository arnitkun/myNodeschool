module.exports = function average(...args){
    var avg = 0
    args.forEach(function(val, index){
        avg = (avg+val);
    });
    avg = avg/args.length;
    return avg;
}