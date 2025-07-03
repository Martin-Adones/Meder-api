const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

class JwtService {
  constructor(config) {
    this.jwtSecret = config.jwtSecret;
    this.jwksUri = config.wso2JwksUri;
    this.jwks = jwksClient({ jwksUri: this.jwksUri });
  }

  crearToken(payload) {
    return jwt.sign(payload, this.jwtSecret, { expiresIn: '1h' });
  }

  async validarTokenWSO2(token) {
    const getKey = (header, callback) => {
      this.jwks.getSigningKey(header.kid, (err, key) => {
        if (err) {
          callback(err);
        } else {
          const signingKey = key.getPublicKey();
          callback(null, signingKey);
        }
      });
    };
    return new Promise((resolve, reject) => {
      jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }
}

const config = {
  jwtSecret: process.env.JWT_SECRET,
  wso2JwksUri: process.env.WSO2_JWKS_URI
};

module.exports = new JwtService(config); 