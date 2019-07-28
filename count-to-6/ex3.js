
var inputs = process.argv.slice(2);
const reducer = (a, b) => a+b;

var result = inputs.map((elem) => elem = elem[0]).reduce(reducer);
console.log(`[${inputs}] becomes \"${result}\"`);
