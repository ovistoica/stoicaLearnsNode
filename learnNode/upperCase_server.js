var http = require('http')
var map = require('through2-map')
var port = process.argv[2] || 8000

var toUpper = map(function (chunk) {
    return chunk.toString().toUpperCase();
})

var server = http.createServer(function (eq, res) {
    eq.pipe(toUpper).pipe(res);
}).on('error', console.error);

server.listen(port);
