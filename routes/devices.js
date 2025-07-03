const express = require('express');
const router = express.Router();
const verifyZeroTrust = require('../middleware/authZeroTrust');

router.get('/', verifyZeroTrust, (req, res) => {
  res.json({
    mensaje: 'Acceso concedido a dispositivos',
    user: req.user,
    device: req.device
  });
});

module.exports = router;
