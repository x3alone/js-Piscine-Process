function flat(array, depth = 1) {
    if (depth === 0) return array;
    let res = [];
    function flatten(arr, currentDepth) {
        for (let item of arr) {
            if (Array.isArray(item) && currentDepth < depth) {
                flatten(item, currentDepth + 1);
            } else {
                result.push(item);
            }
        }
        flatten(array, 0);
        return result;
    }

}

const nestedArray = [1, [2, [3, 4]], 5];
console.log(flat(nestedArray, 1));