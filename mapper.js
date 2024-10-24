function map(arr, fn){
    const res = new Array (arr.length)
    for (let i = 0; i < arr.length; i++) {
        res[i] = fn(arr[i], i, arr); 
    }
    return res
}

function flatMap(arr, fn){
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const value = fn(arr[i], i, arr);
        if (Array.isArray(value)) {
            res.push(...value);
        } else {
            res.push(value);
        }
    }
    return res
}

// const numbers = [1, 2, 3];
// const nbs = map(numbers, (num) => num * num);
// console.log(nbs)

// const numberss = [1, 2, 3];
// const fmp = flatMap(numberss, (num) => [num, num * 2]);
// console.log(fmp)