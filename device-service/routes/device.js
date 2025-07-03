const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');
const deviceInfoController = require('../controllers/deviceInfoController');

router.post('/token', deviceController.generarTokenDispositivo);
router.post('/validate', deviceController.validarTokenDispositivo);
router.get('/info', deviceInfoController.getDeviceInfo);

module.exports = router; 