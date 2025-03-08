// App.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import React from 'react';

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText('');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl ">
      <h1 className="text-4xl font-bold mb-6 text-gray-800/50  text-center">TODO APP</h1>
      
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Add a new todo..."
        />
        <button
          onClick={handleAddTodo}
          className="px-6 py-2 bg-[#646ff0] text-white rounded-lg hover:bg-[#6268b1] transition-colors cursor-pointer"
        >
          Add
        </button>
      </div>

      <Filter />
      <TodoList />
    </div>
  );
};

export default App;
