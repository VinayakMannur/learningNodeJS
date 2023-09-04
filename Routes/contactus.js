const express = require('express');

const contactController = require('../controller/contact')

const router = express.Router();

router.get('/contactus',contactController.getContact);

router.post('/contactus',contactController.postContact);

router.get('/success',contactController.getSuccess);


module.exports = router;