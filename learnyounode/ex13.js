var http = require('http');
var url = require('url');
server = http.createServer( function(req, res) {
    var urlOb = url.parse(req.url, true),
        path = urlOb.pathname,
        strtime = urlOb.query.iso,
        result;
    
    if(path == '/api/parsetime'){
        result = getDateOb(strtime);
    }

    if(path == '/api/unixtime'){
        result = getUnixTime(strtime);
    }

    if(result){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(result));
        res.end();
    } else {
        res.write(404);
        res.end();
    }

});

server.listen(process.argv[2]);

var getTime = (strtime) => {
    return Date.parse(strtime);
}

var getUnixTime = (strtime) => {
    return {
        unixtime: getTime(strtime)
    }
}

var getDateOb = (strtime) => {
    var date =  new Date(getTime(strtime));
    // console.log(date);
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

// res.writeHead(200, { 'Content-Type': 'application/json' }) 


// var http = require('http')                       nodeschool jsonapi server solution
//     var url = require('url')
    
//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }
    
//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }
    
//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result
    
//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }
    
//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))

