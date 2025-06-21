import React, { useState } from 'react';

const GPUComparison = ({ gpus, onCompare }) => {
  const [gpu1, setGpu1] = useState('');
  const [gpu2, setGpu2] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Selecciona dos GPUs</h2>
      <div className="flex gap-4 mb-6">
        <select
          value={gpu1}
          onChange={e => setGpu1(e.target.value)}
          className="flex-1 p-3 bg-purple-700 rounded text-white"
        >
          <option value="">– GPU 1 –</option>
          {gpus.map(g => (
            <option key={g.id} value={g.id}>
              {g.model} ({g.modelYear})
            </option>
          ))}
        </select>
        <select
          value={gpu2}
          onChange={e => setGpu2(e.target.value)}
          className="flex-1 p-3 bg-purple-700 rounded text-white"
        >
          <option value="">– GPU 2 –</option>
          {gpus.map(g => (
            <option key={g.id} value={g.id}>
              {g.model} ({g.modelYear})
            </option>
          ))}
        </select>
      </div>
      <button
        disabled={!gpu1 || !gpu2}
        onClick={() => onCompare([Number(gpu1), Number(gpu2)])}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white disabled:opacity-50"
      >
        Comparar
      </button>
    </div>
  );
};

export default GPUComparison;
