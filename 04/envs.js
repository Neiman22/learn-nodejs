//Переменные окружения: PRODUCTION=false node envs
const productionMode = process.env.PRODUCTION === 'true';
if(productionMode) {
  console.log('Application is running in production mode');
} else {
  console.log('Application is running in development mode');
}