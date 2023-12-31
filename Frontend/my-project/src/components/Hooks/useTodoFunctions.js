import React from 'react'
import { useState, useEffect } from 'react';

export default function useTodoFunctions(initialTodos) {

    const [todos, setTodos] = useState(initialTodos);
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState(initialTodos);

    const addTodo = async (title, completed) => {
      try {
        const response = await fetch('http://localhost:5000/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, completed }),
        });
        const data = await response.json();
        setTodos([ data, ...todos]); 
      } catch (error) {
        console.error('Error al agregar la tarea:', error);
      }
    };

    const updateTodo = async (id, updatedTitle) => {
      try {
        const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: updatedTitle }),
        });
    
        if (response.ok) {
          const data = await response.json(); // Obtener los datos de la respuesta si es necesario
          const updatedList = todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, title: updatedTitle };
            }
            return todo;
          });
          setTodos(updatedList);
          console.log('Solicitud PUT completada correctamente:', data);
        } else {
          console.error('Error al actualizar la tarea:', response.status);
        }
      } catch (error) {
        console.error('Error al actualizar la tarea:', error);
      }
    };

    const deleteTodo = async (id) => {
      try {
        await fetch(`http://localhost:5000/api/todos/${id}`, {
          method: 'DELETE',
        });
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
      } catch (error) {
        console.error('Error al eliminar la tarea:', error);
      }
    };

    
    const handleSetComplete = (id) => {
        const updatedList = todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed}
          }
          return todo;
        })  
        setTodos(updatedList);
    } 
    
    const handleClearComplete = () => {
        const updatedList = todos.filter(todo => !todo.completed);
        setTodos(updatedList);
    };
    
    const handleDelete = (id) => {
        const updatedList = todos.filter(todo => todo.id !== id);
        setTodos(updatedList);
    }
    
    const handleUpdateTodo = (id, updatedTitle) => {
        const updatedList = todos.map((todo) => {
          if (todo.id === id){
            return {...todo, title:updatedTitle};
          };
          return todo;
        });
        setTodos(updatedList);
    };
    
    const showAllTodos = () => {
        setActiveFilter('all')
    }
    
    const showActiveTodos = () => {
        setActiveFilter('active')
    }
    
    const showCompletedTodos = () => {
        setActiveFilter('completed')
    }
      
    useEffect(() => {
        if (activeFilter === 'all') {
          setFilteredTodos(todos);
        } else if (activeFilter === 'active') {
            const activeTodos = todos.filter(todo => todo.completed === false);
            setFilteredTodos(activeTodos);
        } else if (activeFilter === 'completed') {
            const completedTodos = todos.filter(todo => todo.completed === true);
            setFilteredTodos(completedTodos);
        }
        
    },[activeFilter, todos]);

    return {
        todos,
        activeFilter,
        filteredTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        handleSetComplete,
        handleClearComplete,
        handleDelete,
        handleUpdateTodo,
        showAllTodos,
        showActiveTodos,
        showCompletedTodos,
      };
    }
