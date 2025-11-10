// test-connection.js
// Guarda este archivo en la raíz de tu carpeta backEnd

require('dotenv').config();
const mysql = require('mysql2');

console.log('Intentando conectar con:');
console.log('Host:', process.env.DB_HOST);
console.log('Port:', process.env.DB_PORT);
console.log('User:', process.env.DB_USER);
console.log('Database:', process.env.DB_NAME);
console.log('---');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 10000
});

connection.connect((error) => {
  if (error) {
    console.error('❌ Error de conexión:');
    console.error('Código:', error.code);
    console.error('Mensaje:', error.message);
    console.error('---');
    
    if (error.code === 'ENOTFOUND') {
      console.error('El host no se pudo resolver. Verifica el nombre del dominio.');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('Timeout. El servidor no responde o no permite conexiones remotas.');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('Acceso denegado. Verifica usuario y contraseña.');
    }
    
    process.exit(1);
  }
  
  console.log('✅ Conexión exitosa a la base de datos!');
  
  // Probar una consulta simple
  connection.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
    } else {
      console.log('✅ Consulta de prueba exitosa:', results);
    }
    
    connection.end();
    console.log('Conexión cerrada.');
  });
});