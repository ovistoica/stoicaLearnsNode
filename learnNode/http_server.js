var http = require('http')
var fs = require('fs')
var file = process.argv[3]

var server = http.createServer(function (req, res) {
    var readStream = fs.createReadStream(file);
    readStream.on('open', function() {
        readStream.pipe(res);
    })
    readStream.on('error', function(err) {
        res.end(err);
    })
}).on('error', console.error);

server.listen(port);
