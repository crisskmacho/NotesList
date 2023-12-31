import Title from './components/Title/Title'
import TodoInput from './components/TodoInput/TodoInput'
import  TodoList  from './components/TodoList/TodoList'
import useTodoFunctions from './components/Hooks/useTodoFunctions';


const initialTodos = [];


function App() {

  const {
    todos,
    activeFilter,
    filteredTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    handleSetComplete,
    handleClearComplete,
    handleDelete,
    handleUpdateTodo,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
  } = useTodoFunctions(initialTodos);



  return (
    <div className='bg-gray-900 min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList
          activeFilter={activeFilter}
          todos={filteredTodos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleUpdateTodo={handleUpdateTodo}
          handleClearComplete={handleClearComplete}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}


export default App
