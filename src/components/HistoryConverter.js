import React, { Component } from "react";
import { connect } from "react-redux";
import { currencyHistory } from "../actions/fetchCurrencies";
import HistoryList from "./HistoryList";

export class HistoryConverter extends Component {
  render() {
    const latestHistory = this.props.history[this.props.history.length - 1];
    console.log(latestHistory);
    if (!latestHistory) {
      return <div className="dataloaded"> no data loaded yet</div>;
    }

    const key = Object.keys(latestHistory.rates)[0];

    console.log(latestHistory.updated_date);

    return (
      <div>
        <h4 className="title"> Coverted Currency</h4>
        <HistoryList
          currencyName={latestHistory.base_currency_name}
          currencyAmount={latestHistory.amount}
          convertedName={latestHistory.rates[key].currency_name}
          convertedAmount={latestHistory.rates[key].rate_for_amount}
          rate={latestHistory.rates[key].rate}
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
