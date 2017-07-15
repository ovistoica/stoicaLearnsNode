var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, list){
        if(err){
            return callback(err, null);
        } else {
            list = list.filter(function(file){
                var ext = path.extname(file);
                return ext === '.' + extension;
            })
            return callback(null, list);
        }
    })
}
