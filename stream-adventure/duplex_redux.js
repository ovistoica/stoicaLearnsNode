var dup = require('duplexer')
var Sstream = require('stream')

module.exports = function (counter) {
    var countryCount = {};
    var inWrite = new Sstream.Writable({objectMode: true})

    inWrite._write = function(chunk, _, next) {
        if(countryCount[chunk.country])
            countryCount[chunk.country]++;
        else 
            countryCount[chunk.country] = 1;
        next();
    }
    inWrite.end = function(){
        counter.setCounts(countryCount);
    }
    return dup(inWrite, counter);
}
