// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    filter: 'all'
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
