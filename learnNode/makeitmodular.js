var mymodule = require('./mymodule');
var fs = require('fs');
var path = require('path');

function print_list(err, list){
    if(err){
        return console.error(err);
    }
    else {
        list.forEach(function(file){
            console.log(file);
        })

    }
}
mymodule(process.argv[2], process.argv[3], print_list);

