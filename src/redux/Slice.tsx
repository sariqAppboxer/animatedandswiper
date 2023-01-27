import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {

    addTodo(state: string[], action: PayloadAction<string>) {
      state.push(action.payload);
    },
   
    deleteTodo(state, action) {
      state.splice(action.payload, 1);
    },
   
  },
});

export const {addTodo, deleteTodo} =
  todoSlice.actions;
export default todoSlice.reducer;
