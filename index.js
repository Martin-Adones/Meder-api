require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const devicesRoutes = require('./routes/devices');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const deviceRoutes = require('./routes/device');

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'test-tokens.html'));
});

// Ruta para obtener un token (simulación de login)
app.post('/login', (req, res) => {
    const user = { id: 1, username: 'admin' }; // Simulación
    const token = jwt.sign(user, process.env.JWT_SECRET || 'clave_secreta_default', { expiresIn: '1h' });
    res.json({ token });
});

// Rutas API
app.use('/api/devices', devicesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/device', deviceRoutes);

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
