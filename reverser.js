function reverse(x){
    if (typeof x ==='string') {
        let res = ""
        for (let i = x.length-1; i>= 0;){
            res += x[i]
            i--
        }
        return res
    }
    if (Array.isArray(x)) {
        let res = [];
        for (let i = x.length - 1; i >= 0; i--) {
            res.push(x[i]);
        }
        return res;
    }
    return null
}

console.log(reverse('pouet'))
console.log(reverse([1,2,5]))
