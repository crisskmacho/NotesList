class TodoModel {
    constructor(connection) {
      this.connection = connection;
    }
  
    getAllTodos(callback) {
      this.connection.query('SELECT * FROM todos', callback);
    }
  
    addTodo(todo, callback) {
      this.connection.query('INSERT INTO todos SET ?', todo, callback);
    }

    deleteTodo(todoId, callback) {
      this.connection.query('DELETE FROM todos WHERE id = ?', todoId, callback);
    }
  
    updateTodo(todoId, updatedTodo, callback) {
      this.connection.query(
        'UPDATE todos SET ? WHERE id = ?',
        [updatedTodo, todoId],
        callback
      );
    }
  }
  
module.exports = TodoModel;