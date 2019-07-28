module.exports = function special(input, len = input.length){
    var imp = '!';
    return(`${input}`+imp.repeat(len));
}