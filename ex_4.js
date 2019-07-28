const fs = require('fs');
var buf =   fs.readFileSync(process.argv[2]);
var data = buf.toString();
var newLines = 0;
newLines = data.split("\n");
console.log(newLines.length-1);