const express = require('express');
const router = express.Router();
const controllerBlague = require('../controllers');


router.get('/', (req,res)=> {
    res.status(200).json({sucess: 'RACINE API'})
});

router.get('/test', (req,res)=> {
    res.status(200).json({sucess: 'TEST'})
});


router.get('/blagues/random', controllerBlague.random);

router.get('/blagues', controllerBlague.findAll);

router.get('/blagues/:id', controllerBlague.findById);

router.post('/blagues', controllerBlague.create);


module.exports = router;