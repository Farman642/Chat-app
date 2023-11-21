const asyncHandler =require('express-async-handler');
const Chat =require('../models/chatmodel');
const User =require('../models/usersmodel')


const accessChat =asyncHandler (async(req, res)=>{
    const {userId} =req.body;

    if(!userId){
        res.status(400).send('userId is not send')
    }
var isChat =await Chat.find({
    isGroup:false,
    $and:[
        {users:{$elemMatch:{$eq: req.user._id}}},
        {users:{$elemMatch:{$eq: userId}}}
    ]
})
.populate("users","-password")
.populate("latestMessage");

isChat =await User.populate(isChat,{
    path:"latestMessage.sender",
    select:"name email pic",
})

if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

const fetchChat= asyncHandler(async(req,res)=>{
  try {
    Chat.find({Users:{$elemMatch:{$eq:req.user._id}}}).then(results => res.json(results))
  } catch (error) {
    console.log(error);
  }
})

module.exports ={
  accessChat,
  fetchChat
}