import { useState } from 'react';

export default function AuthForms({ setAuth }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/auth/${isLogin ? 'login' : 'register'}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (res.ok && isLogin) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.username);
      setAuth({ token: data.token, user: data.username });
    } else if (res.ok) setIsLogin(true);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-center">{isLogin ? 'Welcome Back' : 'Join EduShare'}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          placeholder="Username" 
          onChange={e => setForm({...form, username: e.target.value})} 
          required 
          className=" focus:border-purple-500/50 "
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={e => setForm({...form, password: e.target.value})} 
          required 
          className=" focus:border-purple-500/50 "
        />
        <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-medium transition-colors">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button 
        onClick={() => setIsLogin(!isLogin)} 
        className="w-full mt-4 text-sm text-gray-400 hover:text-gray-200"
      >
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </button>
    </div>
  );
}
