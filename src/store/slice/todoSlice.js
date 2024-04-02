import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const formatter = new Intl.DateTimeFormat("en-us", {
        dateStyle: "short",
        timeStyle: "short",
      });
      state.tasks.unshift({
        id: state.tasks.length === 0 ? 1 : state.tasks.length + 1,
        text: action.payload,
        createdAt: formatter.format(new Date()),
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.tasks));
    },
    editTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          ...action.payload.updates,
        };
        localStorage.setItem("todos", JSON.stringify(state.tasks));
      }
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.tasks));
    },
    toggleTaskCompletion: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
        localStorage.setItem("todos", JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, removeTask, editTask, toggleTaskCompletion } =
  todoSlice.actions;
export default todoSlice.reducer;
