import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/fetchCurrencies";
import CurrencyList from "./CurrencyList";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }
  render() {
    const currency = this.props.usercur.map((cur, i) => (
      <li key={i}>
        <CurrencyList
          all={cur}
          amount={cur.amount}
          currency={cur.base_currency_code}
          otherCurrency={cur.rates.currency_name}
          covertedAmount={cur.rate_for_amount}
        />
      </li>
    ));

    return (
      <div>
        <h1> Welcome to the Currency Coverter</h1>
        <ul>{console.log(currency)}</ul>
      </div>
    );
  }
}
debugger;
const mapStateToProps = (state) => {
  return {
    currency: state.currencies.currency,
    usercur: state.currencies.userCurrency,
  };
};

export default connect(mapStateToProps, { fetchCurrencies })(Home);

// bject with keys {amount, base_currency_code, base_currency_name, rates, status, updated_date}

// amount: "1000.0000"
// base_currency_code: "USD"
// base_currency_name: "US Dollar"
// rates:
// ETB:
// currency_name: "Ethiopian Birr"
// rate: "37.8812"
// rate_for_amount: "37881.2070"
