var through = require('through2')
var split = require('split')
var count = 1

process.stdin
    .pipe(split())
    .pipe(through (function( buff, _, next) {
        var line = buff.toString()
        this.push(count % 2 === 0 
                  ?line.toUpperCase() + '\n'
                  :line.toLowerCase() + '\n'
        )
        count++;
        next()
    })).pipe(process.stdout);


