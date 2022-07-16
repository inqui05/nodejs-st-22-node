const fs = require('fs');
const readline = require('readline');
const csv = require('csvtojson');

const FILE = './src/nodejs-hw1-ex1';
const OPTIONS = {
  ignoreColumns: /amount/i,
  colParser: { "price": "number" },
};

const rStream = fs.createReadStream(`${FILE}.csv`, {encoding: 'utf-8'});
const wStream = fs.createWriteStream(`${FILE}.txt`, {encoding: 'utf-8'});

const loggingErrors = (err) => console.error(err);
const transformLine = (fileLine,lineNumber) => lineNumber === 0 ? fileLine.toLowerCase() : fileLine;

const rl = readline.createInterface({
  input: csv(OPTIONS).fromStream(rStream).preFileLine(transformLine),
  output: wStream,
});

rl.on('line', (line) => {
  wStream.write(`${line}\n`);
});

rStream.on('error', loggingErrors);
wStream.on('error', loggingErrors);
