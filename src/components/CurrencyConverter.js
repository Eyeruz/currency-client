import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/fetchCurrencies";
import CurrencyList from "./CurrencyList";

export class CurrencyConverter extends Component {
  render() {
    const latest = this.props.usercur[this.props.usercur.length - 1];
    console.log(latest);

    if (!latest) {
      return <div className="dataloaded"> no data loaded</div>;
    }

    const key = Object.keys(latest.rates)[0];

    console.log(latest.rates[key].currency_name);

    return (
      <div>
        <h4 className="title"> Coverted Currency</h4>
        <CurrencyList
          currencyName={latest.base_currency_name}
          currencyAmount={latest.amount}
          convertedName={latest.rates[key].currency_name}
          convertedAmount={latest.rates[key].rate_for_amount}
          convertedDate={latest.updated_date}
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
