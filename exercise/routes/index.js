var express = require('express');
var router = express.Router();
var file_utenti = require('../utenti.json');

/* GET home page. */
router.get('/:email', function (req, res, next) {
    let utente_trovato = file_utenti.utenti.find(utente=> utente.email == req.params.email);
    res.render('utenti', { title: 'YO WASSUP EVERYBDOY', utente: utente_trovato});
});

router.get('/', function (req, res, next) {
    res.render('index', { title: 'YO WASSUP EVERYBODY', utenti: file_utenti.utenti});
});


module.exports = router;
