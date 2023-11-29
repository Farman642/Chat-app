import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-menu">
        <i class="fi fi-br-rectangle-list"></i>
      </div>
      <div className="header-leftFold">
        <label className="header-label">We MeeT </label>
      </div>
      <div className="header-rightFold">
        <div className="header-search">
          <i class="fi fi-bs-search"></i>
          <input placeholder="Search" />
        </div>
        <div className="header-profile">
        <i class="fi fi-ss-user"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
