import React, { useState } from 'react';
import axios from 'axios';

const AddWordForm = () => {
  const [form, setForm] = useState({ word: '', definition: '', imageUrl: '', videoUrl: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5009/words', form);
    alert('Word added successfully');
    setForm({ word: '', definition: '', imageUrl: '', videoUrl: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="word" placeholder="Word" onChange={handleChange} value={form.word} required className="w-full p-2 border rounded" />
      <input name="definition" placeholder="Definition" onChange={handleChange} value={form.definition} required className="w-full p-2 border rounded" />
      <input name="imageUrl" placeholder="Image URL" onChange={handleChange} value={form.imageUrl} required className="w-full p-2 border rounded" />
      <input name="videoUrl" placeholder="Video URL" onChange={handleChange} value={form.videoUrl} required className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Word</button>
    </form>
  );
};

export default AddWordForm;