function cutFirst(str){
    var res = ""
    for (let i = 2; i < str.length; i++){
          res= res +(str[i]);
        }
    return res;
}
function cutLast(str){
    var res = ""
    for (let i = 0; i < str.length-2; i++){
          res= res +(str[i]);
        }
    return res;
}
function cutFirstLast(str){
    var res = ""
    for (let i = 2; i < str.length-2; i++){
          res= res +(str[i]);
        }
    return res;
}
function keepFirst(str){
   return str.slice(0, 2)
}
function keepLast(str){
    return str.slice(-2)
}
function keepFirstLast(str){
    if (str.length <=4){
        return str
    }

return keepFirst(str) +keepLast(str)
   
}
console.log(keepFirstLast('azzzf'))