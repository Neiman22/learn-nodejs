/*
process.stdin - поток ввода
process.stdout - поток вывода
process.stderr - поток ошибки как разновидность потока вывода
*/

//Стандартный поток вывода
const { stdout } = process;
stdout.write ('Hello stdout\n');

//Стандартный поток ввода
//Метод .on() принимает два параметра - название события 'data' и стрелочную функцию-обработчик
const { stdin } = process;
stdin.on('data', data => {
  stdout.write(`Вы ввели: ${data}`);
  process.exit();
});

//Метод process.exit()
process.on('exit', code =>  {
  if (code === 0) {
    stdout.write('Всё в порядке')
  } else {
    stdout.write(`Что-то пошло не так. Программа завершилась с кодом ${code}`)
  }
});