import React, { Component } from "react";
import { deleteSearches } from "../actions/fetchCurrencies";
import { connect } from "react-redux";

export class SearchesDisplay extends Component {
  handleChange = () => {
    this.props.deleteSearches(this.props.id);
  };

  render() {
    return (
      <div className="paper">
        {console.log(this.props.id)}
        <p>{this.props.name}</p>
        <p>{this.props.amount}</p>
        <h1> = </h1>
        <p>{this.props.cName}</p>
        <p>{this.props.cAmount}</p>
        <button className="button" onClick={this.handleChange}>
          Delete
        </button>
        <h3>-----------------</h3>
      </div>
    );
  }
}

export default connect(null, { deleteSearches })(SearchesDisplay);
