function RNA(x) {
    var str = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'T') {
            str += 'A';
        } else if (x[i] === 'A') {
            str += 'U';
        } else if (x[i] === 'C') {
            str += 'G';
        } else if (x[i] === 'G') {
            str += 'C';
        } else {
            str += x[i]
        }
    }
    return str;
}
function DNA(x) {
    var str = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'A') {
            str += 'T';
        } else if (x[i] === 'U') {
            str += 'A';
        } else if (x[i] === 'C') {
            str += 'G';
        } else if (x[i] === 'G') {
            str += 'C';
        } else {
            str += x[i]
        }
    }
    return str;
}


// console.log(RNA("TAGC"))
// console.log(DNA("CCUAUd"))
