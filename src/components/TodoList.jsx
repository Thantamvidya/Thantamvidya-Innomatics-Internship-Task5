import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import React from 'react';

const TodoList = () => {
  const { items, filter } = useSelector((state) => state.todos);
  
  const filteredTodos = items.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 p-6">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
