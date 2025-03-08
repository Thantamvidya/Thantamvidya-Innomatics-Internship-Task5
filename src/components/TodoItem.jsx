import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../store/todoSlice';
import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    dispatch(editTodo({ id: todo.id, text: editedText }));
    setIsEditing(false);
  };

  return (
    <div className={`p-4 rounded-lg shadow-md transition-all duration-200 py-10 ${
      todo.completed ? 'bg-green-100' : 'bg-[#ecedf6]'
    }`}>
      <div className="flex mb-2  justify-between  gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="h-4 w-4 text-blue-600 rounded "
        />
        <div className="space-x-2">
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-red-500 hover:text-red-700 cursor-pointer"
          >
           <MdDelete size={20} />
          </button>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
          >
            {isEditing ?<FaSave size={20} /> : <FaEdit size={20} />}
          </button>
        </div>
      </div>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="w-full p-2 border rounded"
        />
      ) : (
        <p className={`text-gray-800 break-words ${
            todo.completed ? 'line-through' : ''
          }`}>
            {todo.text}
          </p>
      )}
    </div>
  );
};

export default TodoItem;
