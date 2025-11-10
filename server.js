const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Configuración de CORS - permitir múltiples orígenes
const allowedOrigins = [
  'http://localhost:4200',  // Desarrollo local
  'https://crudbackendmysql.onrender.com',  // Tu dominio de Render
  // Añade aquí tu dominio de frontend cuando lo despliegues
];

app.use(cors({
  origin: function(origin, callback) {
    // Permitir requests sin origen (como mobile apps o curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Parsear requests como JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta simple para comprobar que el servidor está funcionando
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenido a la API de productos.',
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

// Importar rutas de productos
require('./app/routes/producto.routes')(app);

// Establecer puerto y escuchar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}.`);
  console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
});