export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];
  fetchTodos: () => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todoId: number) => void;
}
