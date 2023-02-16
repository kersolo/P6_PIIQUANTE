const express = require('express');
const router = express.Router(); // création router express
const pwdValid = require('../models/password'); // import du middleware de validation de password
const limiter = require('../middlewares/apiLimiter'); // import du middleware de limitation de reqêtes par ip
const userCtrl = require('../controllers/userController');

//routes login et signup
router.post('/signup', pwdValid, userCtrl.signup);
router.post('/login', limiter, userCtrl.login);

module.exports = router;
