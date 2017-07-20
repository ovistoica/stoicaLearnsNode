var through = require ('through2')
var trumpet = require('trumpet')
var fs = require('fs')
var tr = trumpet()

process.stdin.pipe(tr);
var upper = through(function (buffer, _, next) {
    this.push(buffer.toString().toUpperCase())
    next();
})

var stream = tr.select('.loud').createStream();

stream.pipe(upper).pipe(stream);

tr.pipe(process.stdout)






