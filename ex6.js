let ext = process.argv[3];
let dir = process.argv[2];

var mymodule = require('./ex6a');

mymodule(dir, ext, function(err, files){ //anonymous function is the callback one
    if(err) throw err;
    for(let i = 0; i < files.length; i++){
        console.log(files[i]);
    }
});