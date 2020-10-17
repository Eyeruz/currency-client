import React from "react";
import HistoryConverter from "./HistoryConverter";
import HistoryForm from "../containers/HistoryForm";
const History = () => {
  return (
    <div>
      <HistoryForm />
      <HistoryConverter />
    </div>
  );
};

export default History;
