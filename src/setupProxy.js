<<<<<<< HEAD
// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Rutas para GPUs → microservicio GPUs (8081)
=======

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
  app.use(
    '/api/gpus',
    createProxyMiddleware({
      target: 'http://localhost:8081',
      changeOrigin: true
    })
  );
<<<<<<< HEAD

  // Rutas para Usuarios → microservicio Usuarios (8080)
=======
>>>>>>> 0066a2f60ee8f08478a19471503421e89a32e096
  app.use(
    '/api/usuarios',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  );
};
