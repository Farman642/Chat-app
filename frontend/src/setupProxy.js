// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/google',
    createProxyMiddleware({
      target: 'http://localhost:4000', // Your server's URL
      changeOrigin: true,
    })
  );
};
