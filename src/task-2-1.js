const { stdin, stdout } = require('process');
stdin.setEncoding('utf8');

const reverseString = (string) => {
  return string.trim().split('').reverse().join('');
}

const reverseStdin = () => {
  let argsString = process.argv.slice(2).join(' ');
  stdout.write(`${reverseString(argsString)}\n`);

  stdin.on('readable', () => {
    let chunk;
    while ((chunk = stdin.read()) !== null) {
      const result = reverseString(chunk);

      stdout.write(`${result}\n`);
    }
  });

}

reverseStdin();
