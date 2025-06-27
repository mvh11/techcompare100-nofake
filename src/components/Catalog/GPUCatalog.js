import React, { useState, useEffect } from 'react';

export default function GPUCatalog() {
  const [gpus, setGpus] = useState([]);
  const [form, setForm] = useState({
    id: null,
    model: '',
    modelYear: '',
    price: '',
    vram: '',
    tech: '',
    cudaCores: '',
    baseClock: '',
    boostClock: '',
    memoryBus: '',
    tdp: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);

<<<<<<< HEAD
  // recarga la lista usando HAL
  const fetchGPUs = () => {
    fetch('http://localhost:8081/api/gpus')
      .then(r => r.json())
      .then(data => {
        setGpus(data._embedded?.gpuList || []);
      })
      .catch(console.error);
  };

  useEffect(fetchGPUs, []);

=======

  const fetchGPUs = () => {
    fetch('http://localhost:8081/api/gpus')
      .then(r => r.json())
      .then(setGpus)
      .catch(console.error);
  };


  useEffect(fetchGPUs, []);


>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
=======

>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const method = form.id ? 'PUT' : 'POST';
      const url = form.id
        ? `http://localhost:8081/api/gpus/${form.id}`
        : 'http://localhost:8081/api/gpus';

<<<<<<< HEAD
=======

>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
      const payload = {
        ...form,
        modelYear: Number(form.modelYear),
        price:     Number(form.price),
        cudaCores: Number(form.cudaCores)
      };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(res.statusText);

<<<<<<< HEAD
=======

>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
      setForm({
        id: null, model: '', modelYear: '', price: '',
        vram: '', tech: '', cudaCores: '',
        baseClock: '', boostClock: '', memoryBus: '', tdp: '', image: ''
      });
      fetchGPUs();
    } catch (err) {
      alert('Error al guardar GPU: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
  const editGPU = gpu => {
    setForm({ ...gpu });
  };

=======

  const editGPU = gpu => {
    setForm({
      id: gpu.id,
      model: gpu.model,
      modelYear: gpu.modelYear,
      price: gpu.price,
      vram: gpu.vram,
      tech: gpu.tech,
      cudaCores: gpu.cudaCores,
      baseClock: gpu.baseClock,
      boostClock: gpu.boostClock,
      memoryBus: gpu.memoryBus,
      tdp: gpu.tdp,
      image: gpu.image
    });
  };


>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
  const deleteGPU = async id => {
    if (!window.confirm('¿Borrar esta GPU?')) return;
    await fetch(`http://localhost:8081/api/gpus/${id}`, { method: 'DELETE' });
    fetchGPUs();
  };

  return (
    <div className="p-4 bg-gray-800 rounded text-white">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 mb-6">
<<<<<<< HEAD
        <input
          name="model"
          value={form.model}
          onChange={handleChange}
          placeholder="Modelo"
          className="p-2 bg-gray-700 rounded"
          required
        />
        <input
          name="modelYear"
          value={form.modelYear}
          onChange={handleChange}
          placeholder="Año"
          className="p-2 bg-gray-700 rounded"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Precio"
          className="p-2 bg-gray-700 rounded"
          required
        />
        <input
          name="vram"
          value={form.vram}
          onChange={handleChange}
          placeholder="VRAM"
          className="p-2 bg-gray-700 rounded"
        />
        <input
          name="tech"
          value={form.tech}
          onChange={handleChange}
          placeholder="Arquitectura"
          className="p-2 bg-gray-700 rounded"
        />
        <input
          name="cudaCores"
          value={form.cudaCores}
          onChange={handleChange}
          placeholder="CUDA Cores"
          className="p-2 bg-gray-700 rounded"
        />
        <input
          name="baseClock"
          value={form.baseClock}
          onChange={handleChange}
          placeholder="Base Clock"
          className="p-2 bg-gray-700 rounded"
        />
        <input
          name="boostClock"
          value={form.boostClock}
          onChange={handleChange}
          placeholder="Boost Clock"
          className="p-2 bg-gray-700 rounded"
        />
        <input
          name="memoryBus"
          value={form.memoryBus}
          onChange={handleChange}
          placeholder="Memory Bus"
          className="p-2 bg-gray-700 rounded"
        />
        <input
          name="tdp"
          value={form.tdp}
          onChange={handleChange}
          placeholder="TDP"
          className="p-2 bg-gray-700 rounded"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="URL Imagen"
          className="p-2 bg-gray-700 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="col-span-2 py-2 bg-blue-600 rounded"
        >
=======
        {/** Campos del form **/}
        <input name="model"      value={form.model}      onChange={handleChange} placeholder="Modelo"        className="p-2 bg-gray-700 rounded" required />
        <input name="modelYear"  value={form.modelYear}  onChange={handleChange} placeholder="Año"            className="p-2 bg-gray-700 rounded" required />
        <input name="price"      value={form.price}      onChange={handleChange} placeholder="Precio"         className="p-2 bg-gray-700 rounded" required />
        <input name="vram"       value={form.vram}       onChange={handleChange} placeholder="VRAM"           className="p-2 bg-gray-700 rounded" />
        <input name="tech"       value={form.tech}       onChange={handleChange} placeholder="Arquitectura"   className="p-2 bg-gray-700 rounded" />
        <input name="cudaCores"  value={form.cudaCores}  onChange={handleChange} placeholder="CUDA Cores"     className="p-2 bg-gray-700 rounded" />
        <input name="baseClock"  value={form.baseClock}  onChange={handleChange} placeholder="Base Clock"     className="p-2 bg-gray-700 rounded" />
        <input name="boostClock" value={form.boostClock} onChange={handleChange} placeholder="Boost Clock"    className="p-2 bg-gray-700 rounded" />
        <input name="memoryBus"  value={form.memoryBus}  onChange={handleChange} placeholder="Memory Bus"     className="p-2 bg-gray-700 rounded" />
        <input name="tdp"        value={form.tdp}        onChange={handleChange} placeholder="TDP"            className="p-2 bg-gray-700 rounded" />
        <input name="image"      value={form.image}      onChange={handleChange} placeholder="URL Imagen"     className="p-2 bg-gray-700 rounded" />
        <button type="submit" disabled={loading} className="col-span-2 py-2 bg-blue-600 rounded">
>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
          {form.id ? 'Actualizar GPU' : 'Crear GPU'}
        </button>
      </form>

      <table className="w-full text-sm text-white">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="p-2">Modelo</th>
<<<<<<< HEAD
            <th>Año</th>
            <th>VRAM</th>
            <th>Precio</th>
            <th>Acciones</th>
=======
            <th>Año</th><th>VRAM</th><th>Precio</th><th>Acciones</th>
>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
          </tr>
        </thead>
        <tbody>
          {gpus.map(gpu => (
            <tr key={gpu.id} className="border-b border-gray-700">
              <td className="p-2">{gpu.model}</td>
              <td>{gpu.modelYear}</td>
              <td>{gpu.vram}</td>
              <td>{gpu.price}</td>
              <td className="p-2 space-x-2">
<<<<<<< HEAD
                <button onClick={() => editGPU(gpu)} className="px-2 py-1 bg-green-600 rounded">
                  Editar
                </button>
                <button onClick={() => deleteGPU(gpu.id)} className="px-2 py-1 bg-red-600 rounded">
                  Borrar
                </button>
=======
                <button onClick={() => editGPU(gpu)} className="px-2 py-1 bg-green-600 rounded">Editar</button>
                <button onClick={() => deleteGPU(gpu.id)} className="px-2 py-1 bg-red-600 rounded">Borrar</button>
>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
<<<<<<< HEAD
  );
=======
);
>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
}
