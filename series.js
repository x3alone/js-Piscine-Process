async function series(x = []) {
    const results = [];
    
    for (const i of x) {
        results.push(await i());
    }
    
    return results;
}   