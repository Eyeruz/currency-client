import React from "react";
import { NavLink } from "react-router-dom";

const IfSignedOut = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/signin"> Sign In </NavLink>
      </div>

      <div className="navbar">
        <NavLink to="/signup"> Sign Up </NavLink>
      </div>
    </>
  );
};

export default IfSignedOut;
