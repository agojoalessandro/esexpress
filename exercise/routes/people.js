var express = require('express');
var router = express.Router();
var file_utenti = require('../utenti.json');

/* GET home page. */
router.get('/api/people', function(req, res, next) {
    res.send(file_utenti);
  //res.render('index', { title: 'Express' });
});

router.get('/search/:email', function(req, res, next) {
    
    let utente_trovato = file_utenti.utenti.find(utente => utante.email == req.params.email);
    console.log(utente_trovato);
  
  //res.render('index', { title: 'Express' });
});

module.exports = router;
