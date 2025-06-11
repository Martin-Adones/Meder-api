const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/token', userController.generarTokenUsuario);
router.post('/validate', userController.validarTokenUsuario);

module.exports = router; 