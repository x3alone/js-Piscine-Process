import fs from 'fs';

const file = process.argv[2];
if (file) {
    read(file);
} else {
    console.log("Where is the file?");
}

function disco(word) {
    const suicide = Math.floor(word.length / 2);
    const short = word.slice(0, suicide);
    const long = word.slice(suicide);
    const retake = long + short;
    return retake;
}

function read(file) {
    try {
        const data = fs.readFileSync(file, 'utf8'); 
        const words = data.split(' ');
        const rev = words.map(disco);
        const res = rev.join(' '); 
        console.log(res); 
    } catch (error) {
        console.log(error);
    }
}
