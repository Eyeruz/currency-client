import React from "react";
import { NavLink } from "react-router-dom";

const SearchLinks = () => {
  return (
    <div>
      <button color="black">
        <NavLink to="/HistorySearches">History Searches</NavLink>
      </button>

      <button color="black">
        <NavLink to="/currencySearches">currency Searches</NavLink>
      </button>
    </div>
  );
};

export default SearchLinks;
