const express = require('express');
const {userEvents,getEvents,googleLogin,urlRedirect}=require('../controller/eventcontroller');
require('dotenv').config();

const router = express.Router();
const {google} = require('googleapis');
const { route } = require('./userRoutes');



router.route('/get-event').get(getEvents);
router.route('/create-event').post(userEvents);
router.route('/').get(googleLogin);
router.route('/').get(urlRedirect)

module.exports = router;