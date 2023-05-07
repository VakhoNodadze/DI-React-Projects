import React, { FC, useState } from 'react';

import { deleteTodo, updateTodo } from './redux/actions';
import { useAppDispatch } from './redux/hooks';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [editTodo, setEditTodo] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const closeEditMode = () => {
    const newTodo: Todo = { ...todo, title: editTodo as string };
    dispatch(updateTodo(newTodo));
    setEditTodo(null);
  };
  const openEditMode = () => {
    setEditTodo(todo.title);
  };

  const handleEditTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  return (
    <li>
      {editTodo ? (
        <div className="flex w-80">
          <input
            value={editTodo}
            onChange={handleEditTodo}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={() => closeEditMode()}
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <span>{todo.title}</span>
          <span
            style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            X
          </span>
          <span
            style={{ marginLeft: '20px', cursor: 'pointer' }}
            onClick={() => openEditMode()}
          >
            Edit todo
          </span>
        </>
      )}
    </li>
  );
};

export default TodoItem;
