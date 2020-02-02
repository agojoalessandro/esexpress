
var express = require('express');
var router = express.Router();
const fs = require('fs');
var f = require('../utenti.json');
var faker = require('faker');



function createUtenti()
{
 let randomName = faker.name.findName(); 
 let randomSurname = faker.name.findName();
 let randomGender = faker.name.findName();
 let randomRegion = faker.name.findName();
 let randomAge = faker.random.number();
 let randomTitle = faker.name.findName();
 let randomPhone = faker.phone.phoneNumber();
 let randomBirthday = faker.helpers.createCard();
 let randomEmail = faker.internet.email(); 
 let randomPassword = faker.internet.password();
 let randomCreditcard = faker.helpers.createCard();

 let person = {
   name:randomName,
   surname:randomSurname,
   gender:randomGender,
   region:randomRegion,
   age:randomAge,
   title:randomTitle,
   phone:randomPhone,
   birthday:randomBirthday,
   email:randomEmail,
   password:randomPassword,
   creditcard:randomCreditcard
  
 }
 return person;
}
/* GET users listing. */
router.get('/', function(req, res, next) {
 res.send(f);
});

router.get('/generate', function(req, res, next) {
   let usersarray = []; //new Array()
    for (let index = 0; index < 2; index++) {
        usersarray.push(createUtenti());

    }

    let formato = { utenti : usersarray};

    let data = JSON.stringify(formato);
   // fs.writeFileSync('utenti.json', data);
    
    res.send(usersarray);
});

module.exports = router;
