function deepCopy(val) {
    if (Array.isArray(val)) {
        return val.map(deepCopy); 
    } 
    else if (val !== null && typeof val === 'object') {
        if (val instanceof RegExp) {
            return new RegExp(val); 
        }

        let copy = {}; 
        Object.keys(val).forEach(function(key) {
            copy[key] = deepCopy(val[key]); 
        });
        return copy;
    } 
    return val;
}
