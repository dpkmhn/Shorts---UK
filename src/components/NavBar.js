import React from "react";
import "./NavBar.css";
import shorts from './shorts.png';
import DrawerComp from "./DrawerComp";

// receiving setCategory from app.js
const NavBar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">

        {/* Sending to setCategory DrawerComp */}
        <DrawerComp setCategory = {setCategory}/>  
      </div>
        
      <img 
        style={{ cursor: "pointer" }}
        src= {shorts}
        height="100%"
        alt="logo"
      />
    </div>
  );
};

export default NavBar;
