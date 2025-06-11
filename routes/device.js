const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

router.post('/token', deviceController.generarTokenDispositivo);
router.post('/validate', deviceController.validarTokenDispositivo);

module.exports = router; 