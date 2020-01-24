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

router.delete(
    '/:productId/:userId',
    requireLogin,
    isAdmin,
    isAuth,
    prodCtrl.deleteOne
);

router.put(
    '/:productId/:userId',
    requireLogin,
    isAdmin,
    isAuth,
    prodCtrl.update
);

router.get('/:productId', prodCtrl.getOne);
// router.get("/search", prodCtrl.listSearch);
router.get('/', prodCtrl.getAll);
router.get('/related/:productId', prodCtrl.getRelated);
router.get('/categories', prodCtrl.listCat);
router.post("/by/search", prodCtrl.listBySearch);
router.get('/photo/:productId', prodCtrl.photo)

router.param('userId', userById);
router.param('productId', prodCtrl.productById);




module.exports = router;