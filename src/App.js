
import React, { useState, useEffect } from 'react';
import AuthForm from './components/Auth/AuthForm';
import GPUComparison from './components/Compare/GPUComparison';
import GPUCard from './components/Compare/GPUCard';
import ComparisonResult from './components/Compare/ComparisonResult';
import AdminPanel from './components/Admin/AdminPanel';
import NavBar from './components/Nav/NavBar';

function App() {
  const [gpus, setGpus]               = useState([]);
  const [user, setUser]               = useState(null);
  const [currentView, setCurrentView] = useState('main');
  const [selectedGPUs, setSelectedGPUs] = useState([]);


  useEffect(() => {
    fetch('http://localhost:8081/api/gpus')
      .then(r => r.json())
      .then(data => setGpus(Array.isArray(data) ? data : []))
      .catch(() => setGpus([]));
  }, []);


  const handleLogin = u => {
    setUser(u);
    setCurrentView('main');
  };


  const handleCompare = ids => {
    setSelectedGPUs(ids);
    setCurrentView('compare');
  };


  const path = window.location.pathname;


  if (path === '/admin') {
    if (!user) {
      return <AuthForm onSuccess={handleLogin} />;
    }
    return <AdminPanel />;
  }


  if (!user) {
    return <AuthForm onSuccess={handleLogin} />;
  }


  if (currentView === 'compare') {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <NavBar userName={user.nombre || user.username} />
        <h2 className="text-3xl mb-4">Resultado de la Comparación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {selectedGPUs.map(id => (
            <GPUCard key={id} gpu={gpus.find(g => g.id === id)} />
          ))}
        </div>
        <ComparisonResult
          gpu1={gpus.find(g => g.id === selectedGPUs[0])}
          gpu2={gpus.find(g => g.id === selectedGPUs[1])}
        />
        <button
          onClick={() => setCurrentView('main')}
          className="mt-6 px-4 py-2 bg-blue-600 rounded"
        >
          Volver
        </button>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <NavBar userName={user.nombre || user.username} />
      <GPUComparison gpus={gpus} onCompare={handleCompare} />
    </div>
  );
}

export default App;
