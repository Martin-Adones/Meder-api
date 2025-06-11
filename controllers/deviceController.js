const jwtService = require('../middleware/jwtService');

exports.generarTokenDispositivo = (req, res) => {
  const { deviceId, tipoDispositivo } = req.body;
  if (!deviceId || !tipoDispositivo) {
    return res.status(400).json({ mensaje: 'Faltan datos requeridos: deviceId y tipoDispositivo.' });
  }
  try {
    const token = jwtService.crearToken({ deviceId, tipoDispositivo, tipo: 'dispositivo' });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al generar el token de dispositivo.', error: error.message });
  }
};

exports.validarTokenDispositivo = (req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ mensaje: 'Falta el header Authorization.' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ mensaje: 'Formato de Authorization incorrecto.' });
  }
  try {
    const payload = jwtService.crearToken(token);
    return res.status(200).json({ valido: true, payload });
  } catch (error) {
    return res.status(401).json({ valido: false, mensaje: 'Token inválido o expirado.', error: error.message });
  }
}; 