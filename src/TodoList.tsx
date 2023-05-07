import React, { ChangeEvent, useEffect, useState } from 'react';
import { useStore } from './zustand/store';
import TodoItem from './TodoItem';
import { Todo } from './interfaces';

const TodoList: React.FC = () => {
  const { todos, fetchTodos, addTodo } = useStore();
  const [userInput, setUserInput] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleAddTodo = () => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;
    const newTodo: Todo = {
      title: userInput,
      id: lastId + 1,
      completed: false,
    };
    addTodo(newTodo);
    setUserInput('');
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <div className="flex w-80">
        <input
          value={userInput}
          onChange={handleInput}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleAddTodo}
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
        >
          Add Todo
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
