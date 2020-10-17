import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/fetchCurrencies";
import CurrencyInput from "../containers/CurrencyInput";
import CurrencyConverter from "./CurrencyConverter";
// import HistoryForm from "../containers/HistoryForm";
// import HistoryConverter from "./HistoryConverter";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }
  render() {
    return (
      <div>
        <CurrencyInput />
        <CurrencyConverter />
        <br />
        {/* <HistoryForm />
        <HistoryConverter /> */}
      </div>
    );
  }
}

export default connect(null, { fetchCurrencies })(Home);
