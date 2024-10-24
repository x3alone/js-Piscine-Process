function filterValues(obj, fn) {
    const res = {};
    for (let [key, value] of Object.entries(obj)) {
        if (fn(value)) {
            res[key] = value;
        }
    }
    return res;
}
function mapValues(obj, fn) {
    const res = {};
    for (let [key, value] of Object.entries(obj)) {
        res[key] = fn(value);
    }
    return res;
}
function reduceValues(obj, fn, val=0) {
    let ac = val;
    for (let value of Object.values(obj)) {
        ac = fn(ac, value);
    }
    return ac;
}

