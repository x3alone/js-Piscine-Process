function filterShortStateName(arr){
    return arr.filter(str => typeof str === 'string' && str.length < 7)
}

function filterStartVowel(arr){
    return arr.filter(str => typeof str === 'string' && /^[aeiouAEIOU]/.test(str));
}

function filter5Vowels(arr){
    return arr.filter(str => typeof str === 'string' && /(?:[aeiouAEIOU].*){5}/.test(str))
}

function filter1DistinctVowel(arr) {
    return arr.filter(str => {
        const vowels = str.match(/[aeiouAEIOU]/g);
        if (vowels) {
            const distinctV = new Set(vowels.map(vowel => vowel.toLowerCase()));
            return distinctV.size === 1;
        }
        return false; 
    });
}
function multiFilter(arr){
    return arr.filter(obj => {
        const eight = typeof obj.capital === 'string' && obj.capital.length >7;
        const start = typeof obj.name === 'string' && !/^[aeiouAEIOU]/.test(obj.name);
        const oneV = typeof obj.tag === 'string' && /[aeiouAEIOU]/.test(obj.tag);
        const reg = typeof obj.region === 'string' && obj.region !== "South";
    return eight && start && oneV && reg;
    });
}
