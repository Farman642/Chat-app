const express = require('express');
const {userEvents,getEvents,googleLogin,urlRedirect}=require('../controller/eventcontroller');
require('dotenv').config();

const router = express.Router();
// const {google} = require('googleapis');
const { route } = require('./userRoutes');




// const oauth2Client = new google.auth.OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     process.env.REDIRECT_URL,
//   );
//   const scope =[
//     'https://www.googleapis.com/auth/calendar'
//   ]

router.route('/get-event').get(getEvents);
router.route('/create-event').post(userEvents);
// router.route('/').get(googleLogin);
// router.route('/').get(urlRedirect)
// router.post('/create-token',async(req,res)=>{
//     try{
//         const {code}=req.body
//         const response =await oauth2Client.getToken(code) 
//         res.send(response)


//     }catch{
//         console.log('error')
//     }
// })

module.exports = router;