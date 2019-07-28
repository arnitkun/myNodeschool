const path = require('path'); // should have used this, but passed without it as well. 
const fs = require('fs');

let ext = process.argv[3];

fs.readdir(process.argv[2], (err, files) => {
    if(err) throw err;
    // console.log(files);
    for(let i = 0; i < files.length; i++){
        if(files[i].endsWith(ext) && files[i] !== ext){
            console.log(files[i]);
        }
    }
});
