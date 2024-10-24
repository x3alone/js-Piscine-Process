import fs from 'fs';
import path from 'path';

const dir = process.argv[2] || '.'; 
// const dirr = dir.replace(/\/+$/, '')

function countEntries(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        const count = files.length;
        // console.log("the entries in " +dirr+ " are " +count);
        console.log(count)
    });
}

const res = path.resolve(dir);
countEntries(res);
