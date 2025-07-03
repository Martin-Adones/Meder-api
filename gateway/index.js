const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/users', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/devices', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/auth', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.listen(3000, () => console.log('Gateway en puerto 3000'));
