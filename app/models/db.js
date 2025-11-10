const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

// Crear conexión con la base de datos
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.port,
  connectTimeout: 60000  // 60 segundos de timeout
});

// Abrir la conexión MySQL
connection.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos:');
    console.error('Host:', dbConfig.HOST);
    console.error('User:', dbConfig.USER);
    console.error('Database:', dbConfig.DB);
    console.error('Port:', dbConfig.port);
    console.error('Error:', error.message);
    throw error;
  }
  console.log('✅ Conexión a la base de datos establecida con éxito.');
  console.log(`📦 Conectado a: ${dbConfig.HOST}:${dbConfig.port}/${dbConfig.DB}`);
});

module.exports = connection;