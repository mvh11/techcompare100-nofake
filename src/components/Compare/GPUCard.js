import React from 'react';

const GPUCard = ({ gpu }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
        <img 
          src={gpu.image} 
          alt={gpu.model}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{gpu.model}</h3>
      
      <div className="space-y-2 text-gray-300 text-sm">
        <div className="flex justify-between">
          <span className="text-purple-400">VRAM:</span>
          <span className="font-medium">{gpu.vram}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-purple-400">Precio:</span>
          <span className="text-green-400">${gpu.price}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-purple-400">Tecnología:</span>
          <span>{gpu.tech}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-purple-400">Año:</span>
          <span>{gpu.year}</span>
        </div>
      </div>
    </div>
  );
};

export default GPUCard;