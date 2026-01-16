import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodos: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTodo: (state, action) => {
      console.log("update clicked: ", action.payload);

      const { editId, input } = action.payload;
      const task = state.find((task) => editId === task.id);
      if (task) {
        task.text = input;
      }
    },
  },
});

export const { addTodos, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
