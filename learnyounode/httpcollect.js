var bl = require('bl');
var http = require('http');

var url = process.argv[2];

http.get(url, callback);

function callback(response){
    let len = 0;

    response.pipe(bl(function (err, data) { /* ... */
        if(err){
            return err;
        } else {
            console.log(data.toString().length);
            console.log(data.toString());
        }
    }))  

}