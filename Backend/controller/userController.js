const asyncHandler =require('express-async-handler');
const User =require('../models/usersmodel');
const generateToken = require('../config/generateToken');


const registerUser =asyncHandler(async(req,res)=>{
    const {name, email,password,pic} = req.body;

    if(!name || !email || !password){

        res.status(400);
        throw new Error ("enter all the feilds")
    }

    const userExist = await User.findOne({email})

    if(userExist) res.status(400).send("user exist already");

    const user =new User({
        name, 
        email,
        password,
        pic,
        
    })

    await user.save();

    if(user){
        res.status(201).json({
            _id :user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token : generateToken(user._id),
        })
    }else{
        res.status(400).send("Not able create user")
    }

});

const authUser = asyncHandler(async(req,res) =>{
    const { email,password} =req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id :user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token : generateToken(user._id),
        })
    }
    else{
        res.status(400).send("invalid email or password ")
    }
});

const allUsers = asyncHandler(async(req,res)=>{
    const keyWord = req.query.search?{
        $or:[
            {name :{$regex : req.query.search , $options:'i'}},//regex to match patter or string
            {email :{$regex : req.query.search , $options:'i'}},
        ]
    }:{}

    const users = await User.find(keyWord)
    // .find({_id:{$ne :req.user._id}});

    res.send(users);
})

module.exports ={
    registerUser,
    authUser,
    allUsers
}