const express = require('express');
const router = express.Router();
const catCtrl = require('../controllers/categories');
const { requireLogin, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/users');

router.get('/:categoryId', catCtrl.getOne);
router.get('/', catCtrl.getAll);

router.post(
    '/create/:userId',
    requireLogin,
    isAuth,
    isAdmin,
    catCtrl.create
);

router.put(
    '/:categoryId/:userId',
    requireLogin,
    isAuth,
    isAdmin,
    catCtrl.update
);

router.delete(
    '/:categoryId/:userId',
    requireLogin,
    isAuth,
    isAdmin,
    catCtrl.deleteOne
);


router.param('categoryId', catCtrl.categoryById)
router.param('userId', userById);




module.exports = router;