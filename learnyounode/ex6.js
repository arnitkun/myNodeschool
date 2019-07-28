var http = require('http')
var url = process.argv[2];
// console.log(url);
    http.get(url, callback);

function callback(response){
    response = response.setEncoding('utf8');
    
    
    response.on('error', function (err){
        console.error(err);
    });

    response.on('data', function(data){
        console.log(data);
    });
}