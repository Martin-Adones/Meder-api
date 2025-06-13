require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const deviceRoutes = require('./routes/devices');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const deviceRoutes = require('./routes/device');

app.use(express.json());
app.use(express.static('public'));

// Ruta para obtener un token (simulación de login)
app.post('/login', (req, res) => {
  const user = { id: 1, username: 'admin' }; // Simulación
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Rutas protegidas
app.use('/api/devices', deviceRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/device', deviceRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
