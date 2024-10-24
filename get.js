function get(src, path) {
    let key = path.split('.')
    let result = src
    for (let i = 0; i < key.length; i++) {
        result = result[key[i]]
        if (result === undefined) {
            return undefined
        }
    }
    return result
}

// const src = { nested: { key: 'peekaboo', t : 't.toString'} }
// const path = 'nested.t'
// get(src, path) 

// const obj = {
//     a: [
//         {
//             b: t 
//         }
//     ]
// };
// console.log(get({ a: [{ b: t }] }, 'a.0.b.toString')) //output > t.toString
