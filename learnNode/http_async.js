var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

function httpGet(index){
    http.get(process.argv[2 + index], function (response){
        response.pipe(bl(function(err, data){
            if(err) {
                return console.error(err)
            }
            else {
                result[index] = data.toString();
                count++;
            }
            if(count == 3)
                printResults();
        }))
    })
}

function printResults(){
    for(var i = 0; i < process.argv.slice(2).length; i++)
        console.log(result[i]);
}

for(var i = 0; i < process.argv.slice(2).length; i++)
    httpGet(i);


        /*
        response.on("data", function(data) {
            bl.append(data);
        })
        response.on("error",console.error)
        response.on('end', function(index) {
            result[index] = bl.toString();
            index++;
        })
    }).on('error', console.error)
})
*/


