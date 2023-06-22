//Флаги: node flags -m Hello
const flagIndex = process.argv.indexOf('-m');
console.log(flagIndex); //2
if (flagIndex !== -1) {
  const messageArr = process.argv[flagIndex + 1];
  console.log(messageArr); //Hello
}