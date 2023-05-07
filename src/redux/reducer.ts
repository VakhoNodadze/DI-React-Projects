import {
  ADD_TODO,
  DELETE_TODO,
  SAVE_TODOS,
  TOGGLE_TODO,
  UPDATE_TODO,
} from './actions';
import { TodoActionTypes } from './actionTypes';

import { combineReducers } from 'redux';

const todosReducer = (state: Todo[] = [], action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      const lastId = state.length > 0 ? state[state.length - 1].id : 0;
      const newTodo: Todo = {
        title: action.newTodo,
        id: lastId + 1,
        completed: false,
      };
      return [...state, newTodo];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.updatedTodo.id) {
          return action.updatedTodo;
        }
        return todo;
      });
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case SAVE_TODOS:
      const firstFiveTodos = action.todos.slice(0, 5);
      return firstFiveTodos;
    default:
      return state;
  }
};

const reducer = combineReducers({ todosReducer });

export default reducer;
