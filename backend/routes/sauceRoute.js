const express = require('express');
const router = express.Router(); // création router express
const auth = require('../middlewares/auth'); // import du middleware d'authentification
const multer = require('../middlewares/multer'); // import du middleware multer
const sauceCtrl = require('../controllers/sauceController');

// routes post, put, delete, getAll, getOne, likesDislikes
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/', auth, sauceCtrl.getAllSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post('/:id/like', auth, sauceCtrl.likesDislikes);

module.exports = router;
