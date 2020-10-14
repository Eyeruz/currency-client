import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/fetchCurrencies";

export class currencyInput extends Component {
  state = {
    userCurrency: "",
    otherCurrency: "",
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
          your currency
          <input
            type="text"
            name="userCurrency"
            value={this.state.userCurrency}
            onChange={this.handleChange}
          />
          convert to
          <input
            type="text"
            name="otherCurrency"
            value={this.state.otherCurrency}
            onChange={this.handleChange}
          />
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
