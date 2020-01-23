const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const { requireLogin, isAdmin, isAuth } = require('../controllers/auth');

router.put('/:userId', requireLogin, isAuth, userCtrl.update);
router.get('/:userId', requireLogin, isAuth, userCtrl.getOne);

router.get(
    '/secret/:userId',
    requireLogin,
    isAdmin,
    isAuth,
    (req, res) => {
        res.json({
            user: req.profile
        })
    });

router.param('userId', userCtrl.userById);

module.exports = router;