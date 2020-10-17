import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/fetchCurrencies";
import CurrencyInput from "../containers/CurrencyInput";
import CurrencyConverter from "./CurrencyConverter";
import Searches from "./Searches";
// import HistoryForm from "../containers/HistoryForm";
// import HistoryConverter from "./HistoryConverter";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
    // this.props.searches();
  }
  render() {
    return (
      <div>
        <Searches />
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
