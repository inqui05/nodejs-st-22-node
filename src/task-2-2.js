import fs from 'fs';
import readline from 'readline';
import csv from'csvtojson';

const file = './src/nodejs-hw1-ex1.csv';
const newFile = './src/nodejs-hw1.ex1.txt';

const rStream = fs.createReadStream(file, {encoding: 'utf-8'});
const wStream = fs.createWriteStream(newFile, {encoding: 'utf-8'});

const rl = readline.createInterface({
  input: csv().fromStream(rStream),
  output: wStream
});

const loggingErrors = (err) => {
  console.error(err);
}

rl.on('line', (line) => {
  wStream.write(`${line}\n`);
});

rStream.on('error', loggingErrors);
wStream.on('error', loggingErrors);
