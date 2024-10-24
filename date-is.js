function isValid(a){
    
    return (a instanceof Date  || typeof a === 'number')&& !isNaN(a)  ;
}
function isAfter(a, b){
    if (!isValid(a) || !isValid(b)) return false;
    return a>b
}
function isBefore(a, b){
    if (!isValid(a) || !isValid(b)) return false;
    return a<b
}
function isFuture(a){    
    return isValid(a) && a > new Date();


}
function isPast(a){
    return isValid(a) && a < new Date();


}


console.log(isValid(Date.now()))