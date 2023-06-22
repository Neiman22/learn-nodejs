const flag = process.argv[2];
if (flag !== '-d' || flag !== 'f') console.log('Пожалуйста, запустите программу с флагом -d или -f');
if (flag === '-d') console.log(__dirname);
if (flag === '-f') console.log(__filename);
