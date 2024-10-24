function sign(x){
    if (x>0){
        return 1
    }else if (x< 0){
        return -1
    }
    return 0
}

function sameSign(a, b){
    if (sign(a)== sign(b)){
        return true
    }
    return false
}