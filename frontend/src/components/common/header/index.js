import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
const navigate = useNavigate()
  const handleAvatarClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
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
                <li onClick={logoutHandler}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
