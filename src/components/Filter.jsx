// Filter.jsx
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/todoSlice';
import React from 'react';

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  const filters = ['all', 'completed', 'incomplete'];

  return (
    <div className="flex gap-4 mb-6">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => dispatch(setFilter(filter))}
          className={`px-4 py-2 rounded-full capitalize cursor-pointer ${
            currentFilter === filter
              ? 'bg-[#646ff0] text-white hover:bg-[#6268b1]'
              : 'bg-[#cccdde]'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
