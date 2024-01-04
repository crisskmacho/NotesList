# Aplicación de Notes

## Descripción
Este proyecto consiste en una aplicación dividida en un frontend y un backend, desarrollada con tecnologías como React, Vite, tailwind, Express y MySQL.

## Requisitos del Sistema
- Node.js (v14 o superior)
- MySQL (v5.7 o superior)

## Configuración e Inicio

### Backend
1. Ve a la carpeta `ensolvers/Backend`.
2. Ejecuta `npm install` para instalar las dependencias del backend.
3. Crea un archivo `.env` con tus credenciales de MySQL siguiendo el formato en `.env`.
4. Ejecuta cualquier script de inicialización de la base de datos, si es necesario (por ejemplo, migraciones con Sequelize).
5. Si desea ejecutar el Backend por separado usar el comando 'nodemon index.js'

### Frontend
1. Ve a la carpeta `ensolvers/Frontend/my-project`.
2. Ejecuta `npm install` para instalar las dependencias del frontend.
3. Si desea ejecutar el Frontend por separado usar el comando 'npm run dev'

### Ejecución
Para iniciar la aplicación:

- Ejecuta el script `./run_app.sh` desde la carpeta principal del proyecto.