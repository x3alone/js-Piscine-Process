function chunk(arr, x){
    var res = [];
    for (let i = 0; i < arr.length; i += x) {
        res.push(arr.slice(i, i + x));
    }

    return res;
}
// console.log(chunk(['a', 'b', 'c', 'd'], 2))