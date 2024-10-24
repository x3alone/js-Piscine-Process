function every(arr, fn){
    for(let i =0 ; i <arr.length; i++){
        if (!fn(arr[i], i, arr)){
            return false
        }
    }
    return true
}
function some(arr, fn){
    for(let i =0 ; i <arr.length; i++){
        if (fn(arr[i], i, arr)){
            return true
        }
    }
    return false
}
function none(arr, fn){
    for(let i =0 ; i <arr.length; i++){
        if (fn(arr[i], i, arr)){
            return false
        }
    }
    return true
}



// const numbers = [9, 1, 3, 5 ];
// const allEven = none(numbers, (num) => num % 2 === 0); // true
// console.log(allEven);