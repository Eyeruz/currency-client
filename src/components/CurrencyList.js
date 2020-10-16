import React from "react";

const CurrencyList = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.currencyName}</p>
      <p>{props.currencyAmount}</p>
      equals
      <p>{props.convertedName}</p>
      <p>{props.convertedAmount}</p>
    </div>
  );
};

export default CurrencyList;
