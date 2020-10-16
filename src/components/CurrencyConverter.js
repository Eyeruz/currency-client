import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/fetchCurrencies";
import CurrencyList from "./CurrencyList";

export class CurrencyConverter extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }
  render() {
    const latest = this.props.usercur[this.props.usercur.length - 1];
    console.log(latest);
    if (!latest) {
      return <div> no data loaded</div>;
    }

    const key = Object.keys(latest.rates)[0];

    console.log(latest.rates[key].currency_name);

    return (
      <div>
        <h1> Welcome to the Currency Coverter</h1>
        <CurrencyList
          currencyName={latest.base_currency_code}
          currencyAmount={latest.amount}
          convertedName={latest.rates[key].currency_name}
          convertedAmount={latest.rates[key].rate_for_amount}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currencies.currency,
    usercur: state.currencies.userCurrency,
  };
};

export default connect(mapStateToProps, { fetchCurrencies })(CurrencyConverter);