function fusion(...arr){
    const res = {};

    arr.forEach(obj => {
        for (let k in obj){
            if (obj.hasOwnProperty(k)){
                const value = obj[k]
                if (Array.isArray(value)) {
                    res[k]= res[k] || [];
                    res[k] = res[k].concat(value);
                }else if (typeof value === 'string'){
                    // res[k] = res[k]|| ''
                    // res[k] += value
                    res[k] = res[k] ? res[k] + ' ' + value : value;
                }else if (typeof value  ==='number'){
                    // res [k] = res[k] || 0
                    // res[k] += value
                    res[k] = typeof res[k] === 'number' ? res[k] + value : value;

                }else if (typeof value ==='object' && value !== null){
                    res[k] = fusion(res[k] || {}, value);
                }else {
                    res[k] = value
                }
            } 
        }
});
return res
}

// console.log(fusion({ a: { b: 1 } }, { a: 1 }))