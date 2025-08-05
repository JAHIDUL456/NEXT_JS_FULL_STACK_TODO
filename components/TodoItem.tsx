'use client';
import { useState } from 'react';
import axios from 'axios';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoItem({
  todo,
  onChange,
}: {
  todo: Todo;
  onChange: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const toggleComplete = async () => {
    await axios.put('/api/todos', {
      id: todo.id,
      completed: !todo.completed,
    });
    onChange();
  };

  const deleteTodo = async () => {
    await axios.delete('/api/todos', { data: { id: todo.id } });
    onChange();
  };

  const saveEdit = async () => {
    if (!editedTitle.trim()) return;
    await axios.put('/api/todos', {
      id: todo.id,
      title: editedTitle,
    });
    setIsEditing(false);
    onChange();
  };

  return (
    <div className="flex justify-between items-center border p-3 rounded mb-2">
      <div className="flex items-center gap-2 w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
        />
        {isEditing ? (
          <input
            className="border px-2 py-1 w-full"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.title}
          </span>
        )}
      </div>

      {isEditing ? (
        <button
          onClick={saveEdit}
          className="ml-2 text-green-600 font-medium"
        >
          Save
        </button>
      ) : (
        <>
          <button
            onClick={() => setIsEditing(true)}
            className="ml-2 text-blue-500 font-medium"
          >
            ✎
          </button>
          <button
            onClick={deleteTodo}
            className="ml-2 text-red-500 font-bold"
          >
            ✕
          </button>
        </>
      )}
    </div>
  );
}
