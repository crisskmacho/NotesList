#!/bin/bash
# Backend: Configuración de la base de datos
cd Backend
npm install

Iniciar el servidor Backend
nodemon index.js

Esperar unos segundos para asegurar que el backend se inicie completamente

Frontend: Iniciar el servidor frontend
cd ../Frontend/my-project
npm install
npm run dev 
