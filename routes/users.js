const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const { requireLogin, isAdmin, isAuth } = require('../controllers/auth');

router.param('userId', userCtrl.userById);

router.get('/secret/:userId', requireLogin, isAdmin, isAuth, (req, res) => {
    res.json({
        user: req.profile
    })
});


module.exports = router;