import React from "react";

const HistoryList = (props) => {
  return (
    <div>
      <p>{props.currencyName}</p>
      <p>{props.currencyAmount}</p>
      equals
      <p>{props.convertedName}</p>
      <p>{props.convertedAmount}</p>
      <p>{props.convertedDate}</p>
    </div>
  );
};

export default HistoryList;
