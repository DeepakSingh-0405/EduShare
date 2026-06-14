import { useState, useEffect } from 'react';
import AuthForms from './components/AuthForms';
import ResourceList from './components/ResourceList';
import ResourceForm from './components/ResourceForm';
import Lightfall from './components/LightFall_Background';

export default function App() {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user')
  });
  const [resources, setResources] = useState([]);

  const fetchResources = async () => {
    const res = await fetch('http://localhost:5000/api/resources');
    const data = await res.json();
    setResources(data);
  };

  useEffect(() => { fetchResources(); }, []);

  const logout = () => {
    localStorage.clear();
    setAuth({ token: null, user: null });
  };

  return (
    <div className="relative min-h-screen bg-transparent overflow-x-hidden z-0">

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Lightfall
          colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
          backgroundColor="#0A295F"
          speed={0.5}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={0.6}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
          color1="#A6C8FF"
          color2="#5227FF"
          color3="#FF9FFC"
        />
      </div>

      <div className="relative z-10">

        <nav className=" py-4 px-8 flex justify-between items-center backdrop-blur-md backdrop:blur sticky top-0 ">
          <h1 className="text-xl font-black tracking-tighter text-purple-500">
            EDUSHARE
          </h1>

          <div className="flex items-center gap-6">
            {auth.token ? (
              <>
                <span className="text-sm text-gray-400">
                  Logged in as{" "}
                  <b className="text-gray-200">{auth.user}</b>
                </span>

                <button
                  onClick={logout}
                  className="text-sm text-red-400 hover:text-red-300 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <span className="text-sm text-gray-500 italic font-mono">
                LOGIN TO USE
              </span>
            )}
          </div>
        </nav>

        <main className="max-w-4xl mx-auto py-12 px-6">
          {!auth.token ? (
            <AuthForms setAuth={setAuth} />
          ) : (
            <>
              <ResourceForm
                token={auth.token}
                onAdded={fetchResources}
              />

              <h2 className="text-2xl font-bold mb-6">
                Recent Resources
              </h2>

              <ResourceList resources={resources} />
            </>
          )}
        </main>

      </div>
    </div>
  );

}
