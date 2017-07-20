var split = require('split');
var combine = require('stream-combiner');
var through = require('through2');
var zlib = require('zlib');

module.exports = function () {

    var outObj; 

    function write(line, _, next){
        if(line.length === 0){
            return next();
        }
        line = JSON.parse(line)

        if(line.type === "genre"){
            if(outObj){
                this.push(JSON.stringify(outObj) + '\n');
            }
            outObj = {
                name : line.name,
                books : []
            }
        }
        else{
            outObj.books.push(line.name);
        }
        next();
    }

    function end(next) {
        if(outObj)
            this.push(JSON.stringify(outObj) + '\n');
        next();
    }

    return combine(split(), through(write, end), zlib.createGzip());
}


