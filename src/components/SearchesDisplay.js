import React from "react";

const SearchesDisplay = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.amount}</p>
      <p>{props.cName}</p>
      <p>{props.cAmount}</p>
    </div>
  );
};

export default SearchesDisplay;
