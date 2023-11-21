const express = require('express');
const { protect } = require('../middleware/authmiddleware');
const {accessChat,fetchChat} =require ('../controller/chatcontroller')

const router = express.Router(); // Use 'express.Router()' as a constructor

router.route('/').post(protect,accessChat);
router.route('/').get(protect,fetchChat);


module.exports = router;