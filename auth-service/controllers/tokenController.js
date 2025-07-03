const jwtService = require('../middleware/jwtService');

exports.generarToken = (req, res) => {
  const { usuario, rol } = req.body;
  if (!usuario || !rol) {
    return res.status(400).json({ mensaje: 'Faltan datos requeridos: usuario y rol.' });
  }
  try {
    const token = jwtService.crearToken({ usuario, rol });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al generar el token.', error: error.message });
  }
};

exports.validarTokenWSO2 = async (req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ mensaje: 'Falta el header Authorization.' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ mensaje: 'Formato de Authorization incorrecto.' });
  }
  try {
    const payload = await jwtService.validarTokenWSO2(token);
    return res.status(200).json({ valido: true, payload });
  } catch (error) {
    return res.status(401).json({ valido: false, mensaje: 'Token inválido o expirado.', error: error.message });
  }
}; 