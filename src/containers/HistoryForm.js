import React, { Component } from "react";
import {
  fetchCurrencies,
  convertCurrencies,
  userCurrencies,
  currencyHistory,
} from "../actions/fetchCurrencies";
import { connect } from "react-redux";
export class HistoryForm extends Component {
  state = {
    From: "",
    To: "",
    Value: "",
    Date: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.convertCurrencies(
      this.state.From,
      this.state.To,
      this.state.Value,
      this.state.
    );

    this.setState({
      To: "",
      From: "",
      Value: "",
      Date: "",
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
    const Today = Date.now();
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          From:
          <select
            name="From"
            value={this.state.From}
            onChange={this.handleChange}
          >
            {array}
          </select>
          <br />
          <br />
          To:
          <select name="To" value={this.state.To} onChange={this.handleChange}>
            {array}
          </select>
          <br />
          <br />
          <input
            type="number"
            min="0.01"
            step="0.01"
            max="1000000"
            name="Value"
            value={this.state.Value}
            onChange={this.handleChange}
            placeholder="value"
          />
          <br />
          <br />
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2010-01-01"
            max={Today}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currency: state.currencies.currency };
}

export default connect(mapStateToProps, {
  fetchCurrencies,
  convertCurrencies,
  userCurrencies,
  currencyHistory,
})(HistoryForm);
