<<<<<<< HEAD
// src/components/Admin/AdminPanel.js
=======
>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
import React from 'react';
import GPUCatalog from '../Catalog/GPUCatalog';
import UserCatalog from '../Catalog/UserCatalog';

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Panel de Administración</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded">
          <h2 className="text-2xl mb-4">Gestión de GPUs</h2>
          <GPUCatalog />
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <h2 className="text-2xl mb-4">Gestión de Usuarios</h2>
          <UserCatalog />
        </div>
      </div>
    </div>
  );
}
