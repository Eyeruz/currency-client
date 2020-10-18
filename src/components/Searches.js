import React, { Component } from "react";
import { connect } from "react-redux";
import { currencySearches } from "../actions/fetchCurrencies";
import SearchesDisplay from "./SearchesDisplay";
import SearchLinks from "./SearchLinks";

export class Searches extends Component {
  componentDidMount() {
    this.props.currencySearches();
  }

  render() {
    const searches = this.props.searches[this.props.searches.length - 1];
    console.log(searches);

    return (
      <>
        <div>
          <SearchLinks />
          {searches
            ? searches.map((search, i) => (
                <SearchesDisplay
                  key={i}
                  id={search.id}
                  name={search.currencyName}
                  amount={search.currencyAmount}
                  cName={search.convertedName}
                  cAmount={search.convertedAmount}
                />
              ))
            : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searches: state.currencies.searches,
  };
};

export default connect(mapStateToProps, { currencySearches })(Searches);
