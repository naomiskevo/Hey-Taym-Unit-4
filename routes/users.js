const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const { userSignupValidator} = require('../validator/index');

router.post('/signup', userSignupValidator, userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/logout', userCtrl.logout);





module.exports = router;