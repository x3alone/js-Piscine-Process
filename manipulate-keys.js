function filterKeys(obj, fn) {
    const res = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && fn(key)) {
            res[key] = obj[key];
        }
    }
    return res;
}

function mapKeys(obj, fn) {
    const res = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = fn(key);
            res[newKey] = obj[key]; 
        }
    }
    return res;
}

function reduceKeys(obj, fn, val) {
    let flag  = false 
    if (val === undefined) {
        flag = true 
    }
    let acc = val 
    for ( let key in obj ) {
        if (obj.hasOwnProperty(key)) {
            if (flag) {
                acc = key 
                flag = false 
            } else {
                acc = fn(acc,key)
            }
        }
    }
    return acc
  
}

// let obj = {
//     a:1,
//     b:2,
//     d:2000000
// }

// console.log(obj.toString)
