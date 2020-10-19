import React, { Component } from "react";
import { connect } from "react-redux";
import { currencyHistorySearches } from "../actions/fetchCurrencies";
import HistorySearchesDisplay from "./HistorySearchesDisplay";
import SearchLinks from "./SearchLinks";

class HistorySearches extends Component {
  componentDidMount() {
    if (this.props.user.user && this.props.user.user.id) {
      this.props.currencyHistorySearches(this.props.user.user.id);
    }
  }
  render() {
    const searches = this.props.searches[this.props.searches.length - 1];
    console.log(searches);
    return (
      <>
        <SearchLinks />
        <div>
          {searches
            ? searches.map((search, i) => (
                <HistorySearchesDisplay
                  key={i}
                  id={search.id}
                  name={search.currencyName}
                  amount={search.currencyAmount}
                  cName={search.convertedName}
                  cAmount={search.convertedAmount}
                  cDate={search.convertedDate}
                  user_id={search.user_id}
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
    user: state.users.user,
    searches: state.currencies.historySearches,
  };
};

export default connect(mapStateToProps, { currencyHistorySearches })(
  HistorySearches
);
