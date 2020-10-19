import React from "react";
import { NavLink } from "react-router-dom";

export const NotLoggedIn = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/signin"> Sign In </NavLink>
      </li>
      <li>
        <NavLink to="/signup"> Sign Up </NavLink>
      </li>
    </ul>
  );
};
