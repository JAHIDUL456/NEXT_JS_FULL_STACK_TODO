'use client';
import { useState } from 'react';
import axios from 'axios';

export default function TodoForm({ onAdd }: { onAdd: () => void }) {
  const [title, setTitle] = useState('');
//in this section i added the usestate hook to manage the title input state
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await axios.post('/api/todos', { title });
    setTitle('');
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border px-3 py-2 rounded w-full text-gray-700 font-semibold"
        placeholder="Enter a todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}
