import React, { useState } from 'react';
import { useStore } from './zustand/store';
import { Todo } from './interfaces';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { updateTodo, deleteTodo } = useStore();

  const [editTodo, setEditTodo] = useState<string | null>(null);

  const closeEditMode = () => {
    const newTodo: Todo = { ...todo, title: editTodo as string };
    updateTodo(newTodo);
    setEditTodo(null);
    setEditTodo(null);
  };
  const openEditMode = () => {
    setEditTodo(todo.title);
  };

  const handleEditTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  const handleDelete = () => {
    // Delete the todo
    deleteTodo(todo.id);
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
            onClick={handleDelete}
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
