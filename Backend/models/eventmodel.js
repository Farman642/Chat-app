// const mongoose = require ('mongoose')

// const eventSchema = mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description:{
//         type: String,
//         required: true
//     },
//     start: {
//         type: Date,
//         required: true
//     },
//     end: {
//         type: Date,
//         required: true
//     },
    
// })

// const Event = mongoose.model("Event",eventSchema);

// module.exports=Event;

const mongoose = require('mongoose');

// Define the schema for your events
const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  start: String,
  end: String,
  email: [String], // Assuming attendees is an array of email addresses
});

// Create a model based on the schema
const Event = mongoose.model('Event', eventSchema);

module.exports=Event;
