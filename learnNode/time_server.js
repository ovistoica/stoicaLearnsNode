//TODO: Time server. Instructions on the left
var net = require('net')


var server = net.createServer(function (socket) {
    var date = new Date();
    var month = zeroCheck(date.getMonth() + 1);
    var day = zeroCheck(date.getDate());
    var hour = zeroCheck(date.getHours());
    var minutes = zeroCheck(date.getMinutes());
    var toPrint = date.getFullYear() + '-' + month  + '-' + day;
    toPrint += ' ' + hour + ':' + minutes;
    socket.write(toPrint)
    socket.end('\n')

}).on('error', console.error)

server.listen(process.argv[2])


function zeroCheck(moment) {
    return moment < 10 ? '0' + moment : moment;
}
