const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer <token>

  if (!token) return res.status(401).json({ error: 'No token, access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // OK
  } catch (err) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};