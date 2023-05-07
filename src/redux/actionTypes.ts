import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  SAVE_TODOS,
} from './actions';

export type ADD_TODO_ACTION = {
  type: typeof ADD_TODO;
  newTodo: string;
};

export type DELETE_TODO_ACTION = {
  type: typeof DELETE_TODO;
  id: number;
};

export type UPDATE_TODO_ACTION = {
  type: typeof UPDATE_TODO;
  updatedTodo: Todo;
};

export type TOGGLE_TODO_ACTION = {
  type: typeof TOGGLE_TODO;
  id: number;
};

export type SAVE_TODOS_ACTION = {
  type: typeof SAVE_TODOS;
  todos: Todo[];
};

export type TodoActionTypes =
  | ADD_TODO_ACTION
  | DELETE_TODO_ACTION
  | UPDATE_TODO_ACTION
  | TOGGLE_TODO_ACTION
  | SAVE_TODOS_ACTION;
