const express =require ('express');
require('dotenv').config();
// const {chats} = require ('./data/data')
const connectionDB = require('../Backend/config/db');
const userRoutes = require('../Backend/routes/userRoutes');
const chatRoutes =require ('../Backend/routes/chatRoutes');
const messageRoutes = require('../Backend/routes/messageRoutes')
const eventRoutes = require('../Backend/routes/eventRoutes')
const googleRoutes =require('../Backend/routes/eventRoutes')
const redirectRoutes =require('../Backend/routes/eventRoutes')


const app = express();

const port =process.env.PORT || 5000;
connectionDB()

app.use(express.json())
app.use('/api/user',userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use('/google',googleRoutes)
app.use('/google/redirect',redirectRoutes)

app.use("/api/events", eventRoutes);

app.get('/',(req,res)=>{
    res.send("Hello form Backend")
})

app.get('/api/chat',(req,res)=>{
    res.send(chats)
});

// app.get('/api/chat/:id',(req,res)=>{
//     // console.log(req.params.id)
//     const singleChat = chats.find((c)=> c._id === req.params.id)
//     res.send(singleChat)

// })

const server =  app.listen(port ,()=>{
    console.log(`Server is live on ${port}`)
})

//Configures Cross-Origin Resource Sharing (CORS)
const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
      origin: "http://localhost:3000",
      // credentials: true,
    },
  });
  //userdata from frontend
 
  io.on("connection", (socket) => {  //This event is fired upon a new connection. 
    console.log("Connected to socket.io");
    socket.on("setup", (userData) => {
      socket.join(userData._id);
      socket.emit("connected");
    });
  
    socket.on("join chat", (room) => {
      socket.join(room);
      console.log("User Joined Room: " + room);
    });
    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));
  
    socket.on("new message", (newMessageRecieved) => {
      var chat = newMessageRecieved.chat;
  
      if (!chat.users) return console.log("chat.users not defined");
  
      chat.users.forEach((user) => {
        if (user._id == newMessageRecieved.sender._id) return;
  
        socket.in(user._id).emit("message recieved", newMessageRecieved);
      });
    });
  
    socket.off("setup", () => {
      console.log("USER DISCONNECTED");
      socket.leave(userData._id);
    });
  });