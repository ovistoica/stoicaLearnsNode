var spawn = require('child_process').spawn;
var dup = require('duplexer2')

module.exports = function (cmd, args) {
    var child = spawn(cmd, args);
    return dup(child.stdin, child.stdout);
};
