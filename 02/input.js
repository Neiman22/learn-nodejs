//Блокирующий I/O
/*
const connection = db.connect();	// подключаемся к базе данных
const users = connection.query('SELECT * FROM users'); // делаем запрос
console.log(users); // выводим информацию в консоль
*/

//Неблокирующий I/O
db.connnect((error, connnection) => {
  if(error) throw error;
  connnection.query('SELECT * FROM users', users => {
    console.log(users);
  })
})