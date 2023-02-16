const rateLimit = require('express-rate-limit');

// limiter le nombre de reqêtes
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: 'Trop de tentatives de connexion, Veuillez rééssayer plustard',
});

module.exports = limiter;
