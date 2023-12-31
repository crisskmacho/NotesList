import React from 'react'
import Todo from '../Todo/Todo'
import { TodoFilters } from '../TodoFilters/TodoFilters'

export default function TodoList(
    {
        todos, 
        activeFilter, 
        handleSetComplete, 
        handleDelete, 
        handleClearComplete,
        handleUpdateTodo, 
        showAllTodos, 
        showActiveTodos, 
        showCompletedTodos, 
        deleteTodo,
        updateTodo,
     }){

    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => (
                <Todo 
                key={todo.id} 
                todo={todo} 
                handleSetComplete={handleSetComplete} 
                handleUpdateTodo={handleUpdateTodo}
                handleDelete={handleDelete}
                deleteTodo={deleteTodo} 
                updateTodo={updateTodo}/> 
            )
            )}
            <TodoFilters
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete} />
        </div>
    )
}
