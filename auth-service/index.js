const express = require('express');
const app = express();
app.use(express.json());
const authRoutes = require('./routes/auth');
// Aquí irán las rutas de autenticación
app.use('/auth', authRoutes);
app.listen(3003, () => console.log('Auth service en puerto 3003')); 