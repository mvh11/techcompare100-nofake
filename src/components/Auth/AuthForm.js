import React, { useState } from 'react';

const AuthForm = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (!email || !password || (!isLogin && !username) || (!isLogin && !confirmPassword)) {
      setError('Completa todos los campos');
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        // LOGIN: GET usuarios y validar email+password vía HAL
        const res = await fetch('http://localhost:8080/api/usuarios');
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`GET usuarios falló (${res.status}): ${text}`);
        }
        const data = await res.json();
        const list = data._embedded?.usuarios || [];
        const user = list.find(u => u.email === email && u.password === password);
        if (!user) throw new Error('Email o contraseña incorrectos');
        onSuccess(user);

      } else {
        // REGISTRO: POST con password incluido
        const payload = {
          nombre:   username,
          email,
          password,
          gpu1:    '',
          gpu2:    ''
        };
        const res = await fetch('http://localhost:8080/api/usuarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const text = await res.text();
        if (!res.ok) {
          throw new Error(`Error al registrar (${res.status}): ${text}`);
        }
        const newUser = JSON.parse(text);
        onSuccess(newUser);
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-purple-800 rounded">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
      </h2>
      {error && <p className="text-red-400 mb-4 break-all">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full p-3 rounded bg-purple-700 text-white"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-purple-700 text-white"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-purple-700 text-white"
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="w-full p-3 rounded bg-purple-700 text-white"
          />
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded text-white"
        >
          {loading
            ? (isLogin ? 'Entrando…' : 'Registrando…')
            : (isLogin ? 'Entrar' : 'Crear cuenta')}
        </button>
      </form>
      <button
        onClick={toggleMode}
        className="mt-4 block mx-auto text-sm text-purple-200 hover:underline"
      >
        {isLogin
          ? '¿No tienes cuenta? Regístrate'
          : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
    </div>
  );
};

export default AuthForm;
