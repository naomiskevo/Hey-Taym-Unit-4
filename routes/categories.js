const express = require('express');
const router = express.Router();
const catCtrl = require('../controllers/categories');


router.post('/create', catCtrl.create);





module.exports = router;