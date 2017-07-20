var tar = require('tar');
var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');
var path = require('path');
var concat = require('concat-stream');

var pass = process.argv[3];
var cipher = process.argv[2];

var parser =tar.Parse();

parser.on('entry', function (e) {
    var hash = crypto.createHash('md5', { encoding: 'hex' });
    if(e.type !== 'File')
        return;
    e.pipe(hash).pipe(concat(function (hash) {
        console.log(hash + ' ' + e.path);
    }))
})

process.stdin
    .pipe(crypto.createDecipher(cipher, pass))
    .pipe(zlib.createGunzip())
    .pipe(parser)
;



    //TODO: Look up giving decipher arg filename(cipher). 
    //BAAA si spala rufe dreq!!!!!!!




