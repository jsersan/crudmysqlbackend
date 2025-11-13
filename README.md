# backendCRUDmysql

## Descripción general

Este proyecto es el backend para una aplicación CRUD (Create, Read, Update, Delete) enfocada en la gestión de artículos de electrónica, utilizando Node.js/Express y MySQL como base de datos. Está optimizado para interactuar con un frontend Angular y preparado para despliegue en plataformas como Render.

## Características principales

- API RESTful con Node.js y Express.
- Conexión y gestión de datos en MySQL.
- Rutas para operaciones CRUD sobre entidades de electrónica.
- Preparación para integración con frontend Angular.
- Compatibilidad y configuraciones para despliegue en Render.

## Estructura del repositorio

- `server.ts` o `app.js`: Archivo principal del servidor Express.
- `/controllers`: Lógica para manejar endpoints y operaciones sobre las entidades.
- `/models`: Definición de los modelos de datos/entidades en MySQL.
- `/services`: Servicios auxiliares para queries y operaciones complejas.
- `.env`: Configuración de variables de entorno (puerto, credenciales de MySQL).
- `package.json`: Dependencias y scripts del proyecto.

## Instalación

1. Clona el repositorio:

git clone https://github.com/jsersan/crud-ang-back-mysql-electronica.git
cd crud-ang-back-mysql-electronica


2. Instala las dependencias:

npm install


3. Configura el archivo `.env` con tus credenciales de MySQL:

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_bd
PORT=3000

## Uso

- Para iniciar el servidor localmente:

npm start

- Accede a la API en: `http://localhost:3000/`.
- Utiliza herramientas como Postman para probar los endpoints CRUD.

## Endpoints principales

- `GET /articulos`: Listado de productos electrónicos.
- `POST /articulos`: Crear nuevo producto.
- `PUT /articulos/:id`: Actualizar producto existente.
- `DELETE /articulos/:id`: Eliminar producto.

## Despliegue en Render

El repositorio incluye configuraciones específicas para facilitar el despliegue en [Render](https://render.com/), como ajustes de dependencias y scripts. Asegúrate de definir las variables de entorno correspondientes en el panel de Render.

- Últimos commits documentan fixes y configuraciones para compatibilidad con Render, incluyendo actualizaciones en dependencias como Express y path-to-regexp.

## Créditos y autor

Desarrollado por [Txema Serrano](https://github.com/jsersan), pensado para aplicaciones modernas de gestión en el sector electrónico. Puedes consultar el historial de cambios y commits [aquí](https://github.com/jsersan/crud-ang-back-mysql-electronica/commits/main).

## Licencia

Sin licencia definida explícitamente. Para contribuciones o usos comerciales, contactar al autor.

