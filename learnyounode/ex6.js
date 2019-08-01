var http = require('http')
var concatStream = require('concat-stream');
var url = process.argv[2];
// console.log(url);
   

http.get(url, callback);

function callback(response){
    response = response.setEncoding('utf8');
    let str = '';
    
    response.on('error', function (err){
        console.error(err);
    });

    // response.on('data', function(data){
    //     // console.log(data);
    //     // console.log('hi');// this thing runs in iterations why??
        
    // });

    response.pipe(concatStream((data) => {
        console.log(data);
}));
    
}

