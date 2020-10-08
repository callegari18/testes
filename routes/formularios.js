const express = require('express');
const formularioController = require ('../controllers/formularioController')


const router = express.Router();


/* GET home page. */
router.get('/', formularioController.viewForm);

router.post('/send', formularioController.sendForm); 

module.exports = router;