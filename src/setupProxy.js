
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/gpus',
    createProxyMiddleware({
      target: 'http://localhost:8081',
      changeOrigin: true
    })
  );
  app.use(
    '/api/usuarios',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  );
};
