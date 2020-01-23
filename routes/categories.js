const express = require('express');
const router = express.Router();
const catCtrl = require('../controllers/categories');
const { requireLogin, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/users');


router.post(
    '/create/:userId',
    requireLogin,
    isAuth,
    isAdmin,
    catCtrl.create
);



router.param('userId', userById);




module.exports = router;