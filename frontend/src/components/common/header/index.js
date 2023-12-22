import React, { useState } from "react";
import "./header.css";


const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleAvatarClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Assuming you have a function to handle logout in your authentication context
    // Replace the following line with your actual logout logic
    console.log("Logout clicked. Add your logout logic here.");

    // For demo purposes, let's simulate a logout by reloading the page
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="header-menu">
        <i className="fi-rr-layout-fluid"></i>
      </div>
      <div className="header-leftFold">
        <label className="header-label">WE MeeT</label>
      </div>
      <div className="header-rightFold">
        <div className="header-search">
          <i className="fi-rr-search"></i>
          <input placeholder="Search" />
        </div>
        <div className="header-profile">
          <button className="header-avatar-button" onClick={handleAvatarClick}>
            <div className="header-options">
              <i className="fi-rr-menu-dots"></i>
            </div>
            <img
              className="header-avatar"
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              alt="User Avatar"
            />
          </button>
          {isDropdownOpen && (
            <div className="header-dropdown">
              <ul>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
