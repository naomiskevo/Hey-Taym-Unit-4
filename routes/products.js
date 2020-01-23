const express = require('express');
const router = express.Router();
const prodCtrl = require('../controllers/products');
const { requireLogin, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/users');


router.post(
    '/create/:userId',
    requireLogin,
    isAuth,
    isAdmin,
    prodCtrl.create
);



router.param('userId', userById);




module.exports = router;