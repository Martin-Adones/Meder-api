const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

router.post('/generar', tokenController.generarToken);
router.post('/validar-wso2', tokenController.validarTokenWSO2);

module.exports = router; 