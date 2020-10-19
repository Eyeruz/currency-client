import React, { Component } from "react";
import { connect } from "react-redux";
import { currencySearches } from "../actions/fetchCurrencies";
import SearchesDisplay from "./SearchesDisplay";
import SearchLinks from "./SearchLinks";

export class Searches extends Component {
  componentDidMount() {
    console.log(this.props);

    if (this.props.user.user && this.props.user.user.id) {
      this.props.currencySearches(this.props.user.user.id);
    }
  }
  update() {
    this.forceUpdate();
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
    searches: state.currencies.searches,
  };
};

export default connect(mapStateToProps, { currencySearches })(Searches);
