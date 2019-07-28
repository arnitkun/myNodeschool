var _ = require('lodash');
var http = require('http');
var url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4];

var urls = [];
urls.push(url1, url2, url3);
console.log(urls);

_.forEach(urls,  function(url){
    http.get(url, callback)
});

function callback(response){
    response = response.setEncoding('utf8');
    
    response.on('error', function (err){
        console.error(err);
    });

    response.on('data', function(data){
        console.log(data);
    });
}