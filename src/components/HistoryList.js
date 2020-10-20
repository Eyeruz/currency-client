import React from "react";

const HistoryList = (props) => {
  return (
    <div className="currency">
      <p>Currency Rate: {props.rate} </p>
      <p>Currency Name: {props.currencyName}</p>
      <p>Amount: {props.currencyAmount}</p>
      <h1> = </h1>
      <p>Currency Name: {props.convertedName}</p>
      <p>Amount: {props.convertedAmount}</p>
      <p>Date: {props.convertedDate}</p>
    </div>
  );
};

export default HistoryList;
