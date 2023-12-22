import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"; // Import the external CSS file

const Sidebar = () => {
  const SidebarData = [
    { id: 1, name: "Events", icon: <i className="fi-rr-bell"></i> },
    { id: 2, name: "Chat", icon: <Link to="/chat"><i className="fi-rr-comment"></i></Link> },
    { id: 3, name: "Calendar", icon: <Link to="/calendar"><i className="fi fi-rr-calendar"></i> </Link>},
    { id: 4, name: "Calls", icon: <i className="fi-rr-headset"></i> },
  ];

  return (
    <div>
      {SidebarData.map((item) => (
        <div key={item.id} style={{ textAlign: "center", margin: "10px 0" }}>
          {item.icon}
          <p style={{ fontSize: "12px", margin: "5px 0" }}>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
