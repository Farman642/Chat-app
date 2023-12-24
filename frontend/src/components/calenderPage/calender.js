import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from 'axios';


function Calendar() {

  const handleOnClick = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/google"
      );
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  


  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
    <Link  to="http://localhost:4000/google">  <Button onClick={handleOnClick}>Add Events</Button></Link>
    </div>
  );
}

export default Calendar;