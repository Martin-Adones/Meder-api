const express = require('express');
const app = express();
app.use(express.json());
const userRoutes = require('./routes/user');
// Aquí irán las rutas de usuario
app.use('/users', userRoutes);
app.listen(3001, () => console.log('User service en puerto 3001')); 