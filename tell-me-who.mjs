import fs from 'fs';
import path from 'path';

const dir = process.argv[2] || '.';

function fileNames(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        function names(files) {
            return files
                .filter(file => file.endsWith('.json')) 
                .map(file => {
                    const [lastName, firstName] = file.replace('.json', '').split('_');
                    return { lastName, firstName };
                });
        }

        const guestNames = names(files).sort((a, b) => {
            const lastNameComparison = a.firstName.localeCompare(b.firstName);
            return lastNameComparison !== 0 ? lastNameComparison : a.firstName.localeCompare(b.firstName);
        });

        guestNames.forEach((guest, ind) => {
            console.log(`${ind + 1}. ${guest.firstName} ${guest.lastName}`);
        });
    });
}

const res = path.resolve(dir);
fileNames(res);
