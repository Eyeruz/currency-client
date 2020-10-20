import React from "react";

const CurrencyList = (props) => {
  console.log(props);
  return (
    <div className="currency">
      <p>Currency Rate: {props.rate} </p>
      <p> Currency Name: {props.currencyName}</p>
      <p> Currency Amount: {props.currencyAmount}</p>
      <h1> = </h1>
      <p> Currency Name: {props.convertedName}</p>
      <p> Currency Amount: {props.convertedAmount}</p>
      <p>Date: {props.convertedDate}</p>
    </div>
  );
};

export default CurrencyList;
