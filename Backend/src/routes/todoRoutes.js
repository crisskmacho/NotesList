const express = require('express');
const TodoModel = require('../models/todoModel');

const router = express.Router();

module.exports = (connection) => {
  const todoModel = new TodoModel(connection);

  // Obtener todas las tareas
  router.get('/', (req, res) => {
    todoModel.getAllTodos((err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    });
  });

  // Agregar una nueva tarea
  router.post('/', (req, res) => {
    const { title, completed } = req.body;
    const newTodo = { title, completed };
    
    todoModel.addTodo(newTodo, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      
      res.status(201).json({
        message: 'Tarea agregada exitosamente',
        id: result.insertId,
        title: newTodo.title,
        completed: newTodo.completed
      });
    });
  });
  
  router.delete('/:id', (req, res) => {
    const todoId = req.params.id;
    todoModel.deleteTodo(todoId, (err, result) => {
      if(err){
        res.status(500).json({ error: err.message});
        return;
      }
      res.json({ message: 'Tarea eliminada exitosamente'});
    });
  });

  
  router.put('/:id', (req, res) => {
    const todoId = req.params.id;
    const updatedTodo = req.body;
  
    todoModel.updateTodo(todoId, updatedTodo, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
  
      res.json({ message: 'Tarea actualizada exitosamente' });
    });
  });

  // Agregar más rutas según las operaciones CRUD que necesites

  return router;
};