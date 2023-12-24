import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import axios from 'axios';



const getAccessToken = async (authorizationCode) => {
    


  
  try {
    const response = await axios.get(
      '/google',
      {
        grant_type: 'authorization_code',
        code: authorizationCode,
        client_id: '219753711726-o5su7s0vkioqmmccs9i2k3297qbhc6ba.apps.googleusercontent.com',
        client_secret: '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',
        redirect_uri:' http://localhost:4000/google/redirect',
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const accessToken = response.data.access_token;
    // Use the accessToken for your API requests
    console.log(accessToken);
  } catch (error) {
    console.error('Error getting access token:', error);
  }
};


const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(new Date());

  const handleSubmit = async () => {
    try {
      


      const { data } = await axios.get(
        "/google/schedule_event",
        {
          title,
          description,
          start: value,
          // other form fields
        },
        {
            headers: {
              Authorization: `Bearer ${getAccessToken}`,
            },
          }
      );
      // Handle response or update state accordingly
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } 
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      border="2px solid black"
      color="black"
    >
      <div>
        <label htmlFor="title">Title:</label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="description">Description:</label>
        <Input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />
        <div>
          <label id="dateLabel" htmlFor="datePicker">
            Select a Date:
          </label>
          <DateTimePicker onChange={setValue} value={value} />
        </div>
        <br />
        <br />

        <Button onClick={handleSubmit} border="2px solid black">
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default AddEvent;


