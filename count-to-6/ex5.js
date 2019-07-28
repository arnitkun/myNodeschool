let input = process.argv.slice(2);

let [a, b, c, d] = input || {};
// console.log(b, c);
console.log(`{ username: \'${b}\', email: \'${c}\' }`);