var fs = require('fs');
/* LIKE NORMAL PROGRAMMING
const buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var cnt = str.split('\n');
console.log(cnt.length - 1);
*/

//NODE SPECIFIC (Asincron)
var cnt = undefined;
function print_lines(callback){
    fs.readFile(process.argv[2], function doneReading(err, fileCont) {
        if (err)
            return console.log(err);
        cnt = fileCont.toString().split('\n').length - 1;
        callback();
        })
}
function log_lines(){
    console.log(cnt);
}

print_lines(log_lines);



