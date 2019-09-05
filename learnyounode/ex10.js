var net = require('net');
var server = net.createServer(function (socket) {
    
    // let day = date.getDay();
    //socket.write(date.getDay().toString());
    socket.end(getFormattedDate() + "\n");
});
server.listen(process.argv[2]);
// console.log('\nhi!!!');

var getFormattedDate =() => {
    var date = new Date();

    return [date.getFullYear(), formatNumber(date.getMonth()+1), formatNumber(date.getDate())].join('-')
            + " " + [formatNumber(date.getHours()), formatNumber(date.getMinutes())].join(':');

}

var formatNumber = (num) => {
    return num < 10 ? "0"+num : num;
}



// var net = require('net')
                                        // nodeschool's solution
//     function zeroFill (i) {
//       return (i < 10 ? '0' : '') + i
//     }
    
//     function now () {
//       var d = new Date()
//       return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
//     }
    
//     var server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })
    
//     server.listen(Number(process.argv[2]))