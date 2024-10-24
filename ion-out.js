function ionOut(str){
    let find = /tion/g;
    let words = str.split(/[, ]+/);

        let arr = words
        .filter(word => word.includes('tion'))
        .map(word => word.replace(find, 't')); 
    
    return arr;
}
// console.log(ionOut("attention, direction")) //==== ['attent','direct']
// console.log(ionOut("1st position is the vision of the 2nd position"))//['posit', 'posit']
// the output should be [attent], [ac]