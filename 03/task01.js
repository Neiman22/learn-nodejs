const { stdout, stdin } = process;

stdout.write('Hello user, whay is your name?\n');

stdin.on('data', data => {
  const dataUpper = data.toString();
  stdout.write(`Hello, ${dataUpper.toUpperCase()}!`);
  process.exit();
});

process.on('exit', () => stdout.write('Good Luck!\n'));