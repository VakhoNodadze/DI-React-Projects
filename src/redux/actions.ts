import {
  ADD_TODO_ACTION,
  DELETE_TODO_ACTION,
  TOGGLE_TODO_ACTION,
  SAVE_TODOS_ACTION,
  UPDATE_TODO_ACTION,
} from './actionTypes';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SAVE_TODOS = 'SAVE_TODOS';

export const addTodo = (newTodo: string): ADD_TODO_ACTION => ({
  type: ADD_TODO,
  newTodo,
});

export const deleteTodo = (id: number): DELETE_TODO_ACTION => ({
  type: DELETE_TODO,
  id,
});

export const toggleTodo = (id: number): TOGGLE_TODO_ACTION => ({
  type: TOGGLE_TODO,
  id,
});

export const updateTodo = (updatedTodo: Todo): UPDATE_TODO_ACTION => ({
  type: UPDATE_TODO,
  updatedTodo,
});

export const saveTodos = (todos: Todo[]): SAVE_TODOS_ACTION => ({
  type: SAVE_TODOS,
  todos,
});
