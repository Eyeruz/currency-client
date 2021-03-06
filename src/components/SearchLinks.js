import React from "react";
import { NavLink } from "react-router-dom";

const SearchLinks = () => {
  return (
    <div>
      <button className="navBar">
        <NavLink to="/currency-history-searches">
          Past Currency Searches
        </NavLink>
      </button>

      <button className="navBar">
        <NavLink to="/currency-searches"> Present Currency Searches</NavLink>
      </button>
    </div>
  );
};

export default SearchLinks;
