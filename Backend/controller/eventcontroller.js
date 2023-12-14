const asyncHandler =require('express-async-handler');
const Event =require('../models/eventmodel');
const moment =require('moment');
const User =require("../models/usersmodel");
require('dotenv').config({});

const {google} = require('googleapis');


const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL,
  );

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const googleLogin= asyncHandler(async(req,res)=>{
    const url =oauth2Client.generateAuthUrl({
        access_type:"offline",
        scope:SCOPES
    })
    res.redirect(url)
    
})

const urlRedirect =asyncHandler(async(req,res)=>{
    console.log(req.query);
    res.send("its working")
})



const userEvents=asyncHandler(async(req,res)=>{
    const {title, 
        description,
        start,
        end,} =req.body;

   

    const event =new Event({
        title, 
        description,
        start,
        end,
    
    })
    await event.save();
    res.status(201).send("event created");

})

const getEvents =asyncHandler(async(req,res)=>{
    const event =await Event.find({start:{$gte:moment(req.query.start).toDate()},
                                    end:{$lte:moment(req.query.end).toDate()}})

                                     
     res.send(event);
})

module.exports={
    userEvents,
    getEvents,
    googleLogin,
    urlRedirect
}