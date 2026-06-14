import { useState } from 'react';

export default function ResourceForm({ token, onAdded }) {
  const [form, setForm] = useState({ title: '', description: '', url: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/resources', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setForm({ title: '', description: '', url: '' });
      onAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 border border-gray-800 rounded-xl flex flex-col gap-4 mb-10">
      <h3 className="text-lg font-medium">Share a Resource</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required 
        className=" focus:border-purple-500/50 "/>
        <input placeholder="Resource URL" value={form.url} onChange={e => setForm({...form, url: e.target.value})} required 
        className=" focus:border-purple-500/50 "/>
      </div>
      <textarea 
        placeholder="Description" 
        className="bg-gray-900 border border-gray-800 focus:border-purple-500/50 outline-none p-4 rounded-lg min-h-[100px]"
        value={form.description} 
        onChange={e => setForm({...form, description: e.target.value})} 
        required 
      />
      <button className="bg-purple-500 text-gray-950 font-bold py-2 rounded-lg hover:bg-purple-400 transition-colors">
        Post Resource
      </button>
    </form>
  );
}
