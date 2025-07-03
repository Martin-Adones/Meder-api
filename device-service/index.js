const express = require('express');
const app = express();
app.use(express.json());
const deviceRoutes = require('./routes/device');
app.use('/devices', deviceRoutes);
// Aquí irán las rutas de dispositivos
app.listen(3002, () => console.log('Device service en puerto 3002')); 