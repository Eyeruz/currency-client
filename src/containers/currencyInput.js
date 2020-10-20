import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCurrencies,
  convertCurrencies,
  userCurrencies,
} from "../actions/fetchCurrencies";

export class CurrencyInput extends Component {
  state = {
    userCurrency: "",
    otherCurrency: "",
    currencyValue: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let user_id = this.props.user.user.id;

    this.props.convertCurrencies(
      this.state.userCurrency,
      this.state.otherCurrency,
      this.state.currencyValue,
      user_id
    );

    this.setState({
      userCurrency: "",
      otherCurrency: "",
      currencyValue: "",
    });
  };

  render() {
    const selectCurrency = this.props.currency.map((cur) => cur.currencies);
    let array = [];
    let counter = 0;

    if (selectCurrency.length > 0) {
      for (const [key, value] of Object.entries(selectCurrency[0])) {
        array.push(
          <option key={counter++} value={key}>
            {value}
          </option>
        );
      }
    }

    return (
      <div>
        <h3>Convert Currency</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="from">From: </label>
          <select
            name="userCurrency"
            value={this.state.userCurrency}
            onChange={this.handleChange}
          >
            {array}
          </select>
          <br />
          <br />
          <label htmlFor="to">To: </label>
          <select
            name="otherCurrency"
            value={this.state.otherCurrency}
            onChange={this.handleChange}
          >
            {array}
          </select>
          <br />
          <br />
          <label htmlFor="amount">Amount: </label>

          <input
            type="number"
            min="0.01"
            step="0.01"
            max="1000000"
            name="currencyValue"
            value={this.state.currencyValue}
            onChange={this.handleChange}
            placeholder="Enter Amount"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currencies.currency,
    user: state.users.user,
  };
}
export default connect(mapStateToProps, {
  fetchCurrencies,
  convertCurrencies,
  userCurrencies,
})(CurrencyInput);
