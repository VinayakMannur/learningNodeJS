const express = require('express');

const adminController = require('../controller/admin')

const router = express.Router();

router.get('/add-product',adminController.getAdmin);

router.post('/add-product',adminController.postAdmin)

module.exports = router;