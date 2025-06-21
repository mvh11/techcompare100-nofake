
import React, { useState, useEffect } from 'react';

export default function UserCatalog() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    id: null,
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    fetch('http://localhost:8080/api/usuarios')
        .then(r => r.json())
        .then(setUsers)
        .catch(console.error);
  };
  useEffect(fetchUsers, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    setLoading(true);
    try {
      const method = form.id ? 'PUT' : 'POST';
      const url = form.id
          ? `http://localhost:8080/api/usuarios/${form.id}`
          : 'http://localhost:8080/api/usuarios';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: form.id,
          nombre: form.nombre,
          email: form.email,
          password: form.password
        })
      });
      if (!res.ok) throw new Error(res.statusText);
      setForm({ id: null, nombre: '', email: '', password: '', confirmPassword: '' });
      fetchUsers();
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const editUser = u =>
      setForm({ ...u, password: '', confirmPassword: '' });

  const deleteUser = async id => {
    if (!window.confirm('¿Borrar este usuario?')) return;
    await fetch(`http://localhost:8080/api/usuarios/${id}`, { method: 'DELETE' });
    fetchUsers();
  };

  return (
      <div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 mb-4">
          <input name="nombre" value={form.nombre} onChange={handleChange}
                 placeholder="Nombre" className="p-2 bg-gray-700 rounded" required />
          <input name="email" value={form.email} onChange={handleChange}
                 placeholder="Email" className="p-2 bg-gray-700 rounded" required />
          <input type="password" name="password" value={form.password} onChange={handleChange}
                 placeholder="Contraseña" className="p-2 bg-gray-700 rounded" required />
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}
                 placeholder="Repetir contraseña" className="p-2 bg-gray-700 rounded" required />
          <button type="submit" disabled={loading} className="col-span-2 py-2 bg-blue-600 rounded">
            {form.id ? 'Actualizar Usuario' : 'Crear Usuario'}
          </button>
        </form>
        <table className="w-full text-sm text-white">
          <thead>
          <tr className="border-b border-gray-600">
            <th className="p-2">Nombre</th><th>Email</th><th>Acciones</th>
          </tr>
          </thead>
          <tbody>
          {users.map(u => (
              <tr key={u.id} className="border-b border-gray-700">
                <td className="p-2">{u.nombre}</td>
                <td>{u.email}</td>
                <td className="p-2 space-x-2">
                  <button onClick={() => editUser(u)} className="px-2 py-1 bg-green-600 rounded">Editar</button>
                  <button onClick={() => deleteUser(u.id)} className="px-2 py-1 bg-red-600 rounded">Borrar</button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}
