var express = require('express');
var router = express.Router();
const formularioController = require ('../controllers/formularioController')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'KLM Corretora de Seguros' });
// });
router.get('/', formularioController.viewForm);
module.exports = router;
