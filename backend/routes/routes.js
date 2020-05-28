const express = require('express');

const router = express.Router();

const accountController = require('C:/Users/Admin/Desktop/SWAP/NODEJS/HowToWriteRestAPI/controllers/accountController.js');

router.post('/account',userController.account);

module.exports = router;