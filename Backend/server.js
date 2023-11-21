const express =require ('express');
require('dotenv').config();
// const {chats} = require ('./data/data')
const connectionDB = require('../Backend/config/db');
const userRoutes = require('../Backend/routes/userRoutes');
const chatRoutes =require ('../Backend/routes/chatRoutes');
// const messageRoutes = require('../Backend/routes/messageRoutes')

const app = express();

const port =process.env.PORT || 5000;
connectionDB()

app.use(express.json())
app.use('/api/user',userRoutes);
app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);

app.get('/',(req,res)=>{
    res.send("Hello form Backend")
})

app.get('/api/chat',(req,res)=>{
    res.send(chats)
});

app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id)
    const singleChat = chats.find((c)=> c._id === req.params.id)
    res.send(singleChat)

})

app.listen(port ,()=>{
    console.log(`Server is live on ${port}`)
})