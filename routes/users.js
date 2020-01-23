const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');


router.param('userId', userCtrl.userById);




module.exports = router;