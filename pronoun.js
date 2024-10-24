function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    let result = {};
    let words = str.toLowerCase().match(/\w+/g);
    words.forEach((currentWord, i) => {
        if (pronouns.includes(currentWord)) {
            if (!result[currentWord]) {
                result[currentWord] = { word: [], count: 0 };
            }
            result[currentWord].count++;
            let nextWord = words[i + 1];
            if (nextWord && !pronouns.includes(nextWord.toLowerCase())) {
                result[currentWord].word.push(nextWord);
            }
        }
    });

    return result;
}



// const ex1 = 'helloman you cant help me with your shift going ';
// console.log(pronoun(ex1));

