import React from 'react';

const calculatePerformanceScore = (gpu) => {
  if (!gpu) return 0;
  
<<<<<<< HEAD
  // Ponderación de características
=======

>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
  const weights = {
    cudaCores: 0.4,
    vram: 0.3,
    memoryBus: 0.15,
    boostClock: 0.15
  };

<<<<<<< HEAD
  // Extraer valores numéricos
=======

>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
  const vram = parseInt(gpu.vram);
  const memoryBus = parseInt(gpu.memoryBus);
  const boostClock = parseFloat(gpu.boostClock);
  
<<<<<<< HEAD
  // Calcular puntaje normalizado
=======

>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
  const score = (
    (gpu.cudaCores * weights.cudaCores) +
    (vram * weights.vram) +
    (memoryBus * weights.memoryBus) +
    (boostClock * weights.boostClock)
  );

  return score;
};

const ComparisonResult = ({ gpu1, gpu2 }) => {
  const score1 = calculatePerformanceScore(gpu1);
  const score2 = calculatePerformanceScore(gpu2);
  const winner = score1 > score2 ? gpu1 : gpu2;
  const difference = Math.abs(score1 - score2);
<<<<<<< HEAD
  const isClose = difference < (Math.max(score1, score2) * 0.1); // Menos del 10% de diferencia
=======
  const isClose = difference < (Math.max(score1, score2) * 0.1);
>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096

  const getPerformanceDifference = () => {
    const percent = (difference / Math.min(score1, score2)) * 100;
    return Math.round(percent);
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 mt-8 border border-purple-500 border-opacity-30">
      <h3 className="text-xl font-bold text-white mb-4">Resultado de la Comparación</h3>
      
      <div className="mb-6">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <div className="h-24 w-24 mx-auto mb-2 bg-gradient-to-br from-purple-600 to-gray-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {Math.round(score1)}
            </div>
            <p className="text-lg font-medium text-white">{gpu1.model}</p>
          </div>
          
          <div className="text-center">
            <div className={`h-16 w-16 mx-auto mb-2 rounded-full flex items-center justify-center text-white text-lg font-bold ${
              isClose ? 'bg-yellow-500' : 'bg-purple-500'
            }`}>
              vs
            </div>
            {!isClose && (
              <p className="text-sm text-gray-400">
                {getPerformanceDifference()}% {score1 > score2 ? 'mejor' : 'peor'}
              </p>
            )}
          </div>
          
          <div className="text-center">
            <div className="h-24 w-24 mx-auto mb-2 bg-gradient-to-br from-purple-600 to-gray-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {Math.round(score2)}
            </div>
            <p className="text-lg font-medium text-white">{gpu2.model}</p>
          </div>
        </div>
        
        {isClose ? (
          <p className="text-center mt-4 text-yellow-400">
            ¡Comparación muy reñida! Ambas tarjetas tienen rendimiento similar.
          </p>
        ) : (
          <p className="text-center mt-4 text-purple-300">
            La tarjeta ganadora es: <span className="font-bold">{winner.model}</span>
          </p>
        )}
      </div>

      <div className="mt-8">
        <h4 className="text-md font-semibold text-white mb-3">Detalles Técnicos</h4>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-gray-400">Especificación</div>
          <div className="text-gray-400 text-center">{gpu1.model}</div>
          <div className="text-gray-400 text-center">{gpu2.model}</div>
          
          <div className="text-gray-300">Núcleos CUDA</div>
          <div className="text-center">{gpu1.cudaCores}</div>
          <div className="text-center">{gpu2.cudaCores}</div>
          
          <div className="text-gray-300">VRAM</div>
          <div className="text-center">{gpu1.vram}</div>
          <div className="text-center">{gpu2.vram}</div>
          
          <div className="text-gray-300">Bus Memoria</div>
          <div className="text-center">{gpu1.memoryBus}</div>
          <div className="text-center">{gpu2.memoryBus}</div>
          
          <div className="text-gray-300">Frecuencia Boost</div>
          <div className="text-center">{gpu1.boostClock}</div>
          <div className="text-center">{gpu2.boostClock}</div>
          
          <div className="text-gray-300">TDP</div>
          <div className="text-center">{gpu1.tdp}</div>
          <div className="text-center">{gpu2.tdp}</div>
          
          <div className="text-gray-300">Tecnología</div>
          <div className="text-center">{gpu1.tech}</div>
          <div className="text-center">{gpu2.tech}</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonResult;

// DONE