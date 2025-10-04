import { createSlice } from "@reduxjs/toolkit";

/**
 * {
 *  id: number,
 *  todo: string,
 *  isComplete: boolean
 * }
 */

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    saveTodo: (state, action) => {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.random() * 1000000,
            todo: action.payload,
            isComplete: false,
          },
        ],
      };
    },
    deleteTodo: (state, action) => {
      const newTodosList = [...state.todos].filter((todo) => todo.id !== action.payload)

      return {
        ...state,
        todos: newTodosList
      }
    }
  },
});

export const { saveTodo } = todoSlice.actions;

export default todoSlice.reducer;