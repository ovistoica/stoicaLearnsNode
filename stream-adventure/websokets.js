var ws = require('websocket-stream');
var fs = require('fs')
var stream = ws('ws://localhost:8099');
stream.end('hello\n')


