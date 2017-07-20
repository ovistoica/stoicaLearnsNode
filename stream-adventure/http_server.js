var http = require('http')
var through = require('through2')

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function(buffer, _,next) {
            var line = buffer.toString();
            this.push(line.toUpperCase())
            next()
        })).pipe(res)
    }
    else res.end('send me a POST\n');
}).listen(process.argv[2])



