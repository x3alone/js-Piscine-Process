function triangle(str, n){
    let is =str 
    let res = ""
    for (let i = 0; i < n; i++){
        res += is
        is = is + str
        if (i !== n -1){
            res += "\n"
        }
    }
    return res
}
// console.log(triangle("*",3))