import React, { Component } from "react";
import { connect } from "react-redux";
import { currencySearches } from "../actions/fetchCurrencies";
import SearchesDisplay from "./SearchesDisplay";

export class Searches extends Component {
  componentDidMount() {
    this.props.currencySearches();
  }

  render() {
    // const key = Object.keys(latestHistory.rates)[0];
    console.log(this.props.searches);
    const currencySearch = this.props.searches[this.props.searches.length - 1];

    const search = currencySearch.map((search, i) => (
      <SearchesDisplay
        key={i}
        name={search.currencyName}
        amount={search.currencyAmount}
        cName={search.convertedName}
        cAmount={search.convertedAmount}
      />
    ));

    return (
      <div>
        <h1>is this working??</h1>
        {console.log(search)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searches: state.currencies.searches,
  };
};

export default connect(mapStateToProps, { currencySearches })(Searches);
