import React, { useState } from 'react'


export default function Todo ({ todo, handleSetComplete, handleDelete, handleUpdateTodo, deleteTodo, updateTodo, })  {


    const { id, title, completed } = todo;
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(title);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleUpdateClick = () => {
        updateTodo(id, updatedTitle); 
        setIsEditing(false);
    };
    

    const handleDeleteClick = (id) => {
        deleteTodo(id);
    };

  return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 ">
            <div className="flex items-center">
                {
                    completed ? (
                        <div onClick={() => handleSetComplete(id)} className=" bg-blue-400 p-1 rounded-full cursor-pointer">
                            <img className="h-4 w-4 " src="/archive-icon.svg" alt="Archive Icon"/>
                        </div>
                    ):(
                        <span onClick={() => handleSetComplete(id)} className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer`}>
                        </span>
                    )}
                    {isEditing ? (
                    <input
                        className="focus:shadow-lg font-Inter focus:shadow-blue-400 pl-4 w-full py-1 bg-gray-500 rounded-full outline-none transition-all duration-300 ease-in-out"
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        onKeyDown={(e) => {
                        if (e.key.toLowerCase() === 'enter') {
                            handleUpdateClick();
                        }
                        }}
                    />
                    ) : (
                    <p
                        className={`pl-3 ${completed && 'line-through'}`}
                        onDoubleClick={handleEditClick} // Al hacer doble clic, se activa la edición
                    >
                        {title}
                    </p>
                    )}
            </div>
            <div className='flex items-center'>
                <img
                    onClick={() => handleDeleteClick(id)}
                    className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
                    src="/close-icon.svg"
                    alt="Close Icon"
                />
                <img
                    onClick={isEditing ? handleUpdateClick : handleEditClick} // Si está en edición, actualiza; de lo contrario, activa la edición
                    className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
                    src="/edit-icon.svg"
                    alt="Edit Icon"
                />
            </div>
        </div>
  );
}

