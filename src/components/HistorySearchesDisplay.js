import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteHistorySearches } from "../actions/fetchCurrencies";

class HistorySearchesDisplay extends Component {
  handleChange = () => {
    this.props.deleteHistorySearches(this.props.id);
  };
  render() {
    return (
      <div>
        {console.log(this.props.id)}
        <p>{this.props.name}</p>
        <p>{this.props.amount}</p>
        <p>{this.props.cName}</p>
        <p>{this.props.cAmount}</p>
        <p>{this.props.user_id}</p>
        <button onClick={this.handleChange}>Delete</button>
        <h3>-----------------</h3>
      </div>
    );
  }
}

export default connect(null, { deleteHistorySearches })(HistorySearchesDisplay);
