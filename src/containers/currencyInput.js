import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/fetchCurrencies";

export class currencyInput extends Component {
  state = {
    userCurrency: "",
    otherCurrency: "",
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      userCurrency: "",
      otherCurrency: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="user-currency"
            value={this.state.userCurrency}
            onChange={this.handleChange}
            placeholder="your currency"
          />
          <br />
          <br />
          <input
            type="text"
            name="other-currency"
            value={this.state.otherCurrency}
            onChange={this.handleChange}
            placeholder="convert to"
          />
          <br />
          <br />
          <input
            type="text"
            name="currency-value"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="value"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { currency: state.currency };
// }
export default connect(null, { fetchCurrencies })(currencyInput);
