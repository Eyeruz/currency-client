import React from "react";
import { NavLink } from "react-router-dom";

const SearchLinks = () => {
  return (
    <div>
      <button color="black">
        <NavLink to="/currency-history-searches">History Searches</NavLink>
      </button>

      <button color="black">
        <NavLink to="/currency-searches">Currency Searches</NavLink>
      </button>
    </div>
  );
};

export default SearchLinks;
