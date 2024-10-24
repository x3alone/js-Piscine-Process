function longWords(arr){
    return arr.every(element => typeof element === 'string' && element.length >4);

}
function oneLongWord(arr){
    return arr.some(element => typeof element === 'string' && element.length >9);
}
function noLongWords(arr){
    return !arr.some(element => typeof element === 'string' && element.length >6);
}

// console.log(noLongWords(['filaaal', 'caraaaaabon', 'aachart', 'glareaa', 'express']))