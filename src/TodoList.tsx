import React, { useEffect, useState, ChangeEvent } from 'react';

import { addTodo, saveTodos } from './redux/actions';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import TodoItem from './TodoItem';

const Todo = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todosReducer);
  const [userInput, setUserInput] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json: Todo[]) => dispatch(saveTodos(json)));
  }, [dispatch]);

  const handleAddTodo = () => {
    dispatch(addTodo(userInput));
    setUserInput('');
  };

  return (
    <div>
      <div className="flex w-80">
        <input
          value={userInput}
          onChange={(e) => handleInput(e)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={() => handleAddTodo()}
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
        >
          Add Todo
        </button>
      </div>
      <ul className="flex flex-col">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
