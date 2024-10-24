import { Buffer } from "node:buffer";
import { writeFile, readFile } from "node:fs/promises";

const args = process.argv.slice(2);
const input = args[0]; 
const method = args[1];
const output = args[2]; 

const file = await readFile(input); 

if (method === 'encode') {
    const encodedData = Buffer.from(file).toString("base64");
    await writeFile(output || 'cypher.txt', encodedData); 
} 

if (method === 'decode') {
    const decodedData = Buffer.from(file.toString(), "base64").toString();
    await writeFile(output || 'clear.txt', decodedData); 
}
