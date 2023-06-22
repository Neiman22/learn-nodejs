//Аргументы командной строки: node args 1 2 3
console.log(process.argv);
/*
[
  '/usr/local/bin/node', (путь к файлу node.exe)
  '/Users/puskarev/Desktop/APP/learn-nodejs/04/args', (путь к запущенному файлу)
  '1',
  '2',
  '3'
]
*/
console.log(process.argv.slice(2)); //[ '1', '2', '3' ]

