const express = require('express');
const { registerUser, authUser,allUsers } = require('../controller/userController');
const { protect } = require('../middleware/authmiddleware');

const router = express.Router(); // Use 'express.Router()' as a constructor

router.route('/').post(registerUser).get(protect,allUsers);
router.route('/login').post(authUser);

module.exports = router;
