const jwt = require('jsonwebtoken');
const jwtService = require('./jwtService');

module.exports = async (req, res, next) => {
  const userToken = req.header('User-Authorization')?.split(' ')[1];
  const deviceToken = req.header('Device-Authorization')?.split(' ')[1];

  if (!userToken || !deviceToken) {
    return res.status(401).json({ error: 'Faltan uno o ambos tokens de acceso.' });
  }

  try {
    // Validar token de usuario (local o WSO2)
    const userPayload = jwt.verify(userToken, process.env.JWT_SECRET);
    // Validar token de dispositivo (puedes usar lógica similar o WSO2 si aplica)
    const devicePayload = jwt.verify(deviceToken, process.env.JWT_SECRET);

    // Aquí podrías hacer una llamada al access point/control de políticas
    // Simulación: Si ambos tokens son válidos, permitir acceso
    req.user = userPayload;
    req.device = devicePayload;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido o expirado.' });
  }
}; 