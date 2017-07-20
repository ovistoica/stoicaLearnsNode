var concat = require('concat-stream')

process.stdin
    .pipe(concat(function(buffer) {
        var line = buffer.toString()
        console.log(line.split('').reverse().join(''))
    }))
