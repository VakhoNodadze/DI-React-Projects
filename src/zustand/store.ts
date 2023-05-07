import { create } from 'zustand';

import { TodoStore, Todo } from '../interfaces';

export const useStore = create<TodoStore>((set) => ({
  todos: [],

  fetchTodos: async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const todos = await response.json();
      const firstFiveTodos: Todo[] = todos.slice(0, 5) || [];
      set({ todos: firstFiveTodos });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  },

  addTodo: (todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },

  updateTodo: (updatedTodo) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      ),
    }));
  },

  deleteTodo: (todoId) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    }));
  },
}));
