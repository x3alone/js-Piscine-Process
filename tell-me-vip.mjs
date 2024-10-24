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
            const guests = [];

            files
                .filter(file => file.endsWith('.json')) 
                .forEach(file => {
                    const [lastName, firstName] = file.replace('.json', '').split('_');
                    const filePath = path.join(directory, file); 
                    const data = JSON.parse(fs.readFileSync(filePath)); 

                    if (data.answer === 'yes') {
                        guests.push({ lastName, firstName });
                    }
                });

            return guests; 
        }

        const guestNames = names(files).sort((a, b) => {
            const lastNameComparison = a.firstName.localeCompare(b.firstName);
            return lastNameComparison !== 0 ? lastNameComparison : a.firstName.localeCompare(b.firstName);
        });

        const guestListString = guestNames
            .map((guest, index) => `${index + 1}. ${guest.firstName} ${guest.lastName}`)
            .join('\n');

        fs.writeFile('vip.txt', guestListString, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(guestListString);
        });
    });
}

const res = path.resolve(dir);
fileNames(res);
