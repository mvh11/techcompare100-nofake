// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Rutas para GPUs → microservicio GPUs (8081)
  app.use(
    '/api/gpus',
    createProxyMiddleware({
      target: 'http://localhost:8081',
      changeOrigin: true
    })
  );

  // Rutas para Usuarios → microservicio Usuarios (8080)
  app.use(
    '/api/usuarios',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  );
};
