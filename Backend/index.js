require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./src/db/db');
const todoRoutes = require('./src/routes/todoRoutes');
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/todos', todoRoutes(db));

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});