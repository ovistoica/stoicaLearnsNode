function foo(){
    var bar;
    quux = 'Global';
    function zip(){
        let quux = 'nested';
        bar = true;
    }
    return zip;
}
