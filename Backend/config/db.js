const mongoose = require ('mongoose')
require('dotenv').config()



const connectionDB = async()=>{
    try {
        const connt =await mongoose.connect(process.env.mongo_URL,{
            useNewUrlParser :true ,
            useUnifiedTopology :true
        }
            );console.log(`database is connected ${connt.connection.host}`);
    } catch (error) {
        console.log(`error ${error.message}`);
        process.exit()
        
    }
}

module.exports =connectionDB;