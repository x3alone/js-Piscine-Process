function adder(arr,nb =0) {
    return arr.reduce((res, num) => res + num, nb);
}
function sumOrMul(arr,nb= 0){
    return arr.reduce((res, num) => {
        if (num % 2 == 0){
            return res * num
        }else {
            return res + num
        }
    },nb)
}
function funcExec(arr,nb=0){
    return arr.reduce((acc, func) => {
        return func(acc);
    },nb);
    }

// console.log(adder([1,2,3,4]))
// console.log(adder([9, 24, 7, 11, 3], 10))