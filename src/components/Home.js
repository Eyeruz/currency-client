import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/fetchCurrencies";
import CurrencyInput from "../containers/CurrencyInput";
import CurrencyConverter from "./CurrencyConverter";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }
  render() {
    return (
      <div>
        <CurrencyInput />
        <CurrencyConverter />
      </div>
    );
  }
}

export default connect(null, { fetchCurrencies })(Home);
