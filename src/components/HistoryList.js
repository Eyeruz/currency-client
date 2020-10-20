import React from "react";

const HistoryList = (props) => {
  return (
    <div className="currency">
      <p>{props.currencyName}</p>
      <p>{props.currencyAmount}</p>
      <h1> = </h1>
      <p>{props.convertedName}</p>
      <p>{props.convertedAmount}</p>
      <p>{props.convertedDate}</p>
    </div>
  );
};

export default HistoryList;
