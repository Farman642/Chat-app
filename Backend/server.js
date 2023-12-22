const express =require ('express');
require('dotenv').config();
// const {chats} = require ('./data/data')
const connectionDB = require('../Backend/config/db');
const userRoutes = require('../Backend/routes/userRoutes');
const chatRoutes =require ('../Backend/routes/chatRoutes');
const messageRoutes = require('../Backend/routes/messageRoutes')
// const eventRoutes = require('../Backend/routes/eventRoutes')
// const googleRoutes =require('../Backend/routes/eventRoutes')
// const redirectRoutes =require('../Backend/routes/eventRoutes')
const {google} = require('googleapis');
const axios = require('axios');
const dayjs = require('dayjs');
// const { uuid } = require ('uuid');
const { default: mongoose } = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
}));
const port =process.env.PORT || 5000;
connectionDB()

const calendar = google.calendar({
  version:"v3",
  auth:process.env.API_KEY,
})

app.use(express.json())
app.use('/api/user',userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
// app.use('/google',googleRoutes)
// app.use('/google/redirect',redirectRoutes)
// app.use("/api/events", eventRoutes);

app.use('/api',(req,res)=>{
    res.send("Hello form Backend")
})


const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL,
);
const scopes  =[
  'https://www.googleapis.com/auth/calendar'
]

app.get('/google',(req,res)=>{
  // const url = oauth2Client.generateAuthUrl({
    
  //   access_type: 'offline',
  //   scope: scopes

  // });
  const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar&response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URL)}`;
  res.json({ url: oauthUrl });
  // res.redirect(url)

})

// app.get('/google/redirect',async(req,res)=>{
  
//   try {
//     const code = req.query.code;
//   console.log('Code from query:', code);
//     const { tokens } = await oauth2Client.getToken(code);
//     oauth2Client.setCredentials(tokens);

//     // Send a response back to the React app indicating successful authentication
    
//     const redirectUrl = await '/schedule_event';
//   res.json({ url: generatedAuthUrl, redirectUrl });
//   // res.json("Its working")
//   } catch (error) {
//     console.error('Google Auth Redirect Error:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// })


app.get('/google/redirect', async (req, res) => {
  try {
    const code = req.query.code;
    console.log('Code from query:', code);
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Redirect to '/schedule_event' after successful authentication
    const redirectUrl = '/schedule_event';
    res.json({ success: true, redirectUrl });
  } catch (error) {
    console.error('Google Auth Redirect Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/schedule_event',async(req,res)=>{
  await calendar.events.insert({
    calendarId:'primary',
    auth:oauth2Client,
    conferenceDataVersion:1,
    requestBody:{
      Title:"adding event",
      description:"adding events dis",
      start: {
         dateTime:dayjs(new Date()).add(1, 'day').toISOString(),
        timeZone: 'Asia/Kolkata',
      },
      end: {
        dateTime: dayjs(new Date()).add(1, 'day').add(1, 'hour').toISOString(),
        timeZone: 'Asia/Kolkata',
      },
      conferenceData:{
        createRequest:{
          requestId:mongoose.Schema.ObjectId.user,
        }

      },
      attendees:[{
        email:"farmankhan.7874@gmail.com",

      }]

    }
  })

  res.send({
    msg:"done",
  })
  
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
  
    socket.on("disconnect", () => {
      console.log("USER DISCONNECTED");
      // socket.leave(userData._id);
    });
  });