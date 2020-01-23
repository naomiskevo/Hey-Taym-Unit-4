const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');
const { userSignupValidator} = require('../validator/index');

router.post('/signup', userSignupValidator, authCtrl.signup);
router.post('/login', authCtrl.login);
router.get('/logout', authCtrl.logout);




module.exports = router;