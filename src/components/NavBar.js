import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <button color="black">
        <NavLink to="/">Home</NavLink>
      </button>

      <button>
        <NavLink to="/about">About</NavLink>
      </button>

      <button>
        <NavLink to="/history">Currency History</NavLink>
      </button>

      <button>
        <NavLink to="/search-history">Search History</NavLink>
      </button>
    </div>
  );
};

export default NavBar;
