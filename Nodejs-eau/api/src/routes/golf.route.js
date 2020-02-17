const express = require('express');
const router = express.Router();
const golf = require('../controller/golf.controller');
const verifyToken = require('../helpers/verifyToken');
router.post('/golfs',golf.create);// 
router.get('/golfs/all/',verifyToken,golf.findAll);
router.get('/golfs/id/:id',verifyToken,golf.findById);
router.delete('/golfs/idremove/:id',verifyToken,golf.findByIdAndRemove);
router.put('/golfs/idupdate/:id',verifyToken,golf.findByIdAndUpdate);
router.delete('/golfs/remove/:id',verifyToken,golf.removeALL);
module.exports = router;
    

/*	créer une golf
	Mettre à jour un golf
	Supprimer un golf
	Lire un golf*/
