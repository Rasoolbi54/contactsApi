const express = require('express');
const { register, login, currentUser } = require('../controllers/userControllers');
const isAuthorized = require('../middleware/isAuth');
const router = express.Router();


router.post('/register' , register);

router.post('/login' , login);

router.get('/current', isAuthorized,  currentUser)


module.exports = router