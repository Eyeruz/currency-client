import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <button color="black">
        <NavLink to="/">Home</NavLink>
      </button>

      <button>
        <NavLink to="/form">Convert</NavLink>
      </button>

      <button>
        <NavLink to="/about">About</NavLink>
      </button>
    </div>
  );
};

export default NavBar;
