//// Exportation de la logique de routine ////
//// Déporter les routes ////

const express = require('express');
const router = express.Router();
// > Permet de créer des routeurs séparés pour chaque route principale de votre application
// Puis d'y enregistrer des routes individuelles.

const auth = require('../middelware/auth');
const multer = require('../middelware/multer-config')

const stuffCtrl = require('../controllers/sauces');


router.get('/', auth, stuffCtrl.getAllSauces);
router.post('/', auth, multer, stuffCtrl.createSauce);
router.get('/:id', auth, stuffCtrl.getOneSauces);
router.put('/:id', auth, multer, stuffCtrl.modifySauce);
router.delete('/:id', auth, stuffCtrl.deleteSauce);
router.post("/:id/like", auth, stuffCtrl.likeDislikeSauce)

module.exports = router;