var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var exten = process.argv[3];

fs.readdir(dir, function finnish_reading(err, list) {
    if(err)
        return console.error(err);
    list.forEach(function(element) {
        var ext = path.extname(element);
        if(ext === '.' + exten)
            console.log(element);
    })
})
