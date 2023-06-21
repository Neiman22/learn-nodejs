const { stdout, stdin } = process;

stdout.write('Hello user, whay is your name?\n');

stdin.on('data', data => {
  const dataUpperRev = data.toString().split('').reverse().join('');
  stdout.write(`Твоё имя наоборот: ${dataUpperRev}\n`);
  process.exit();
});

process.on('exit', () => stdout.write('Good Luck!\n'));