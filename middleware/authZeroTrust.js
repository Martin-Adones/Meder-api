const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const userToken = req.header('User-Authorization')?.split(' ')[1];
  const deviceToken = req.header('Device-Authorization')?.split(' ')[1];

  if (!userToken || !deviceToken) {
    return res.status(401).json({ error: 'Faltan uno o ambos tokens de acceso.' });
  }

  try {
    const userPayload = jwt.verify(userToken, process.env.JWT_SECRET);
    const devicePayload = jwt.verify(deviceToken, process.env.JWT_SECRET);

    req.user = userPayload;
    req.device = devicePayload;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido o expirado.' });
  }
}; 