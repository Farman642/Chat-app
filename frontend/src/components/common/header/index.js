import React from "react";
import "./header.css";

const Header = () => {
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
          <div className="header-options">
            <i className="fi-rr-menu-dots"></i>
          </div>
          <img
            className="header-avatar"
            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
