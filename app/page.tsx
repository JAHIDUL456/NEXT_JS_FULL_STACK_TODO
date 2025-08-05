'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from '@/components/TodoForm';
import TodoItem from '@/components/TodoItem';
import GridListToggle from '@/components/GridListToggle';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isGridView, setIsGridView] = useState(false); // false = list view, true = grid view

  const fetchTodos = async () => {
    try {
      const res = await axios.get('/api/todos');
      setTodos(res.data);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main className="max-w-xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">📝 Todo App</h1>

      {/* Grid/List toggle button */}
      <div className="flex justify-center mb-6">
        <GridListToggle
          isGridView={isGridView}
          toggleView={() => setIsGridView(!isGridView)}
        />
      </div>

      {/* Todo input form */}
      <TodoForm onAdd={fetchTodos} />

      {/* Todos container: grid or list */}
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet</p>
      ) : (
        <div
          className={`gap-4 ${
            isGridView
              ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
              : 'flex flex-col'
          }`}
        >
          {todos.map((todo) => (
            <div key={todo.id} className={isGridView ? '' : 'mb-2'}>
              <TodoItem todo={todo} onChange={fetchTodos} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
