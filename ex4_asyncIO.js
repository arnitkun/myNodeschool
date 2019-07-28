const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    //data = data.toString();
    let newLine = 0;
    newLine = data.split("\n");
    console.log(newLine.length-1);
});