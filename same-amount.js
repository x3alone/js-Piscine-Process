function sameAmount(str, a, b){ 
    let findA= new RegExp(a, 'g')
    let findB= new RegExp(b, 'g')

    let matchA = str.match(findA) || []
    let matchB = str.match(findB) || []
    return matchA.length === matchB.length
}

console.log(sameAmount("abababab", "a","b"))