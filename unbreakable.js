function split(x, sep) {
    if (!sep) {
        var arr = [];
        for (let i = 0; i < x.length; i++) {
            arr.push(x[i]);
        }
        return arr;
    }
    
    var str = [];
    var word = "";
    for (let i = 0; i < x.length; i++) {
        if (x.slice(i, i + sep.length) === sep) {
            str.push(word); 
            word = "";
            i += sep.length - 1;
        } else {
            word += x[i]; 
        }
    }
    
        str.push(word); 


    return str;
}

function join(x,sep){
    // var res =[];
    var str ="";
    for (let i = 0; i< x.length; i++){
        str += x[i]
        if (i < x.length -1){
            str += sep;
        }
    }
    return str;
}
console.log(split('ee,ff,g,', ','));
console.log(join(['ee', 'ff', 'g', ''], ','));
