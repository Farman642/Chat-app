import React from "react";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import Leftfold from "./left-fold";
import Rightfold from "./right-fold";
import "./call.css";

function Calls() {
  return (
    <div className="calls-container">
      <Header />
      <div className="calls-body">
        <div className="calls-sidebar">
          <Sidebar />
        </div>
        <div className="calls-leftFold">
          <Leftfold />
        </div>
        <div className="calls-rightFold">
          <Rightfold />
        </div>
        </div>
      </div>
  );
}

export default Calls;
