//node task1.js -m
const flag = process.argv[2];

process.stdout.write('Введите два числа\n');
process.stdin.on('data', data => {
  const string = data.toString().trim();
  const numbers = string.split(' ');
  if (flag === '-s') console.log(`${numbers[0]} + ${numbers[1]} = ${+numbers[0] + +numbers[1]}`);
  if (flag === '-m') console.log(`${numbers[0]} * ${numbers[1]} = ${+numbers[0] * +numbers[1]}`);
  process.exit();
})