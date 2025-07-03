require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const devicesRoutes = require('./routes/devices');

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'test-tokens.html'));
});

// Endpoint para generar token de usuario
app.post('/login', (req, res) => {
    const user = { id: 1, username: 'admin' };
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Endpoint para generar token de dispositivo
app.post('/device-token', (req, res) => {
    const device = { id: req.body.deviceId || 'device1', type: req.body.type || 'sensor' };
    const token = jwt.sign(device, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Rutas API
app.use('/api/devices', devicesRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: '¡Algo salió mal!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Página de prueba disponible en http://localhost:${PORT}/test-tokens.html`);
});
