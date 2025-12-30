import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload)
    },
    editTodo: (state, action) => {
      const { index, newValue } = action.payload
      state.todos[index] = newValue
    },
  },
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
