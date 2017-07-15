var http = require('http');
const BufferList = require('bl');
var URL = process.argv[2];

/* PRINT DATA AS IT COMES
 *
http.get(URL, function (response){
    response.setEncoding('utf8');
    response.on("data", console.log)
    response.on("error",console.error)
}).on('error', console.error)
*/

/* Collect DATA AND PRINT IN THE END */


http.get(URL, function (response){
    var bl = new BufferList()
    response.on("data", function(data) {
        bl.append(data);
    })
    response.on("error",console.error)
    response.on('end', function(totalData) {
        console.log(bl.length);
        console.log(bl.toString());
    })
}).on('error', console.error)
