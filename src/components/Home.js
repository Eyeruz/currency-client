import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/fetchCurrencies";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }
  render() {
    console.log(this.props.currency);

    return (
      <div>
        <h1> Welcome to the Currency Coverter</h1>
        {/* {currencyRates} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currencies.currencies,
  };
};

export default connect(mapStateToProps, { fetchCurrencies })(Home);
