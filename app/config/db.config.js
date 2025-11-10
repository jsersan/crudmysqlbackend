module.exports = {
  HOST: process.env.DB_HOST || 'localhost',
  USER: process.env.DB_USER || 'root',
  PASSWORD: process.env.DB_PASSWORD || 'root',
  DB: process.env.DB_NAME || 'crud_angular_mysql',
  dialect: 'mysql',
  port: parseInt(process.env.DB_PORT) || 3306,  // Leer desde variable de entorno
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,  // Aumentado para conexiones lentas
    idle: 10000
  }
};