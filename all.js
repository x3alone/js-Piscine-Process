async function all(objects = {}) {
    const result = {};
    const entries = Object.entries(objects);
    
    if (entries.length === 0) return result;

    for (const [k, promise] of entries) {
        result[k] = await promise;
    }
    
    return result;
}