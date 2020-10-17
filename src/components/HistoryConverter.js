import React, { Component } from "react";
import { connect } from "react-redux";
import { currencyHistory } from "../actions/fetchCurrencies";
import HistoryList from "./HistoryList";

export class HistoryConverter extends Component {
  render() {
    const latestHistory = this.props.history[this.props.history.length - 1];
    console.log(latestHistory);
    if (!latestHistory) {
      return <div> no data loaded yet</div>;
    }

    const key = Object.keys(latestHistory.rates)[0];

    console.log(latestHistory.updated_date);

    return (
      <div>
        <h1> Welcome to the History Coverter</h1>
        <HistoryList
          currencyName={latestHistory.base_currency_code}
          currencyAmount={latestHistory.amount}
          convertedName={latestHistory.rates[key].currency_name}
          convertedAmount={latestHistory.rates[key].rate_for_amount}
          convertedDate={latestHistory.updated_date}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.currencies.userHistory,
  };
};

export default connect(mapStateToProps, { currencyHistory })(HistoryConverter);
