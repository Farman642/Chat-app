import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Login-Signup/user.png";
import email_icon from "../Login-Signup/email.png";
import padlock_icon from "../Login-Signup/padlock.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  

  return (
    <div className="container">

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>  

      <div className="inputs">
        
        {action === "Login" ? (<div></div> ) : (
          
       
          <div className="input">
            <img src={user_icon} alt="" />
            <input  placeholder="Name" type="text"/>
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input  placeholder="Email Id" type="email"/>
        </div>

        <div className="input">
          <img src={padlock_icon} alt="" />
          <input  placeholder="Password" type="password" />
        </div>
      

       {action === "Sign Up" ?
       <div></div>
       :
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>}
      </div>
      
      <div className="submit-container">

        <div className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}>
          Sign Up
        </div>
        
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}>
          Login
        </div>

      </div>
    </div>
  );
};

export default LoginSignup;
