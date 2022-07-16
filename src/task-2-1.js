const { stdin, stdout } = require('process');
stdin.setEncoding('utf8');

const reverseAndSendToOutputStream = (string) => {
  const result = string.trim().split('').reverse().join('');
  stdout.write(`${result}\n`);
}

const reverseStdin = () => {
  let argsString = process.argv.slice(2).join(' ');
  reverseAndSendToOutputStream(argsString);

  stdin.on('readable', () => {
    let chunk;
    while ((chunk = stdin.read()) !== null) {
      reverseAndSendToOutputStream(chunk);
    }
  });

}

reverseStdin();
