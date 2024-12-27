const express = require('express');
const ContactsRoute = require('../controllers/contactController');
const isAuthorized = require('../middleware/isAuth');
const router = express.Router();


router.get('/contacts' , isAuthorized, ContactsRoute.allContacts);

router.get('/contacts/:id' ,isAuthorized, ContactsRoute.getContact)

router.post('/contacts' ,isAuthorized, ContactsRoute.createContact);

router.put('/contacts/:id' ,isAuthorized, ContactsRoute.updateContact);

router.delete('/contacts/:id' ,isAuthorized, ContactsRoute.deleteContact);


module.exports = router