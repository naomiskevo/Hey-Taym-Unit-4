const express = require('express');
const router = express.Router();
const prodCtrl = require('../controllers/products');
const { requireLogin, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/users');

router.get('/:productId', prodCtrl.getOne)
router.post(
    '/create/:userId',
    requireLogin,
    isAuth,
    isAdmin,
    prodCtrl.create
);



router.param('userId', userById);
router.param('productId', prodCtrl.productById);




module.exports = router;