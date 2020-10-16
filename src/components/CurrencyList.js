import React from "react";

const CurrencyList = (props) => {
  return (
    <div>
      <h4>{props.currency}</h4>
      <h4>{props.amount}</h4>
      <div> = </div>
      <h4>{props.otherCurrency}</h4>
      <h4>{props.covertedAmount}</h4>
    </div>
  );
};

export default CurrencyList;
