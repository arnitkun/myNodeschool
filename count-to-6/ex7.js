let input = process.argv.splice(2);
let min = Math.min(...input);
console.log(`The minimum of [${input}] is ${min}`);