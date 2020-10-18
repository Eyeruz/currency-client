import React, { Component } from "react";
import { deleteSearches } from "../actions/fetchCurrencies";
import { connect } from "react-redux";

export class SearchesDisplay extends Component {
  handleChange = (event) => {
    this.props.deleteSearches(this.props.id);
  };
  render() {
    return (
      <div>
        {console.log(this.props.id)}
        <p>{this.props.name}</p>
        <p>{this.props.amount}</p>
        <p>{this.props.cName}</p>
        <p>{this.props.cAmount}</p>
        <button onClick={this.handleChange}>Delete</button>
        <h3>-----------------</h3>
      </div>
    );
  }
}

export default connect(null, { deleteSearches })(SearchesDisplay);
