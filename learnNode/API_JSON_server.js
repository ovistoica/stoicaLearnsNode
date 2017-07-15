var http = require('http')
var url = require('url')


function timeRet(time){
    return {
        "hour" : time.getHours(),
        "minute" : time.getMinutes(),
        "second" : time.getSeconds()
    }
}

function unixTime(time) {
    return { unixtime: time.getTime() }
}

var server = http.createServer(function(req, res) {
    req.on('error', function(err) {
        console.error(err);
    })
    var body = url.parse(req.url, true)
    var date = new Date(body.query.iso);
    var result
    if(body.pathname === '/api/parsetime'){
        result = timeRet(date);
    }
    else {
        result = unixTime(date);
    }
    if(result){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }

}).on('error', console.error)

server.listen(process.argv[2])
