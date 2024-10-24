function filter(arr, fn){
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res
}


function reject(arr, fn){
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res
}
function partition(arr, fn){
    const pass= [];
    const rej = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            pass.push(arr[i]);
        } else {
            rej.push(arr[i]);
        }
    }
    return [pass, rej]
}

// console.log(filter([
//     10,
//     -10,
//     20,
//     86,
//     2,
//     32,
//     450,
//     950,
//     66,
//     150,
//   ]))