const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const verifyToken = require('../middleware/auth');

router.get('/', verifyToken, async (req, res) => {
  try {
    const response = await fetch(`${process.env.MENDER_URL}/api/management/v1/inventory/devices`, {
      headers: {
        'Authorization': `Bearer ${process.env.MENDER_TOKEN}`
      }
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Error Mender:', error);
      return res.status(500).json({ error: 'Error al obtener dispositivos desde Mender' });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
