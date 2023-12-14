// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "../src/components/Chatpage";
import Home from "./components/calls/index";
import { SidebarData, SidebarMore, SidebarBottom } from "./components/common/sidebar";
import Sidebar from "./components/common/sidebar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<Home />} />
            <Route path="/chat" element={<ChatPage />} />

        {/* Other routes for Events, Calendar, and Calls go here */}
        {/* Example:
        <Route path="/events" element={<EventsComponent />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="/calls" element={<CallsComponent />} />
        */}
      </Routes>
    </Router>
  );
};

export default App;
