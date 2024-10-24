
function pyramid(str, num) {
    let charrr = ""
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < (num-i-1)*str.length; j++){
            charrr += ' '
        }
        for (let k = 0; k < (i*2)+1; k++){
            charrr += str
        }
        if (i!=num-1){
            charrr += '\n'
        }

    }
    return charrr
}

// function pyramid(str, nb) {
//     let res = "";
//     for (let i = 0; i < nb; i++) {
//         let empty = ' '.repeat(nb - i - 1);
//         let char = str.repeat(2 * i + 1); 
//         res += empty + char;
//         if (i !== nb - 1) {
//             res += "\n";
//         }
//     }
//     return res;
// }




console.log(pyramid('{}', 12))
//(str.length*nb)-str.length