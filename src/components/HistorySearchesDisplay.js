import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteHistorySearches } from "../actions/fetchCurrencies";

class HistorySearchesDisplay extends Component {
  handleChange = () => {
    this.props.deleteHistorySearches(this.props.id);
  };
  render() {
    return (
      <div className="paper">
        {console.log(this.props.id)}
        <p>Currency Code: {this.props.name}</p>
        <p> Amount: {this.props.amount}</p>
        <h1> = </h1>
        <p>Currency Name: {this.props.cName}</p>
        <p> Amount: {this.props.cAmount}</p>
        <p> Date: {this.props.cDate}</p>
        <button className="button" onClick={this.handleChange}>
          Delete
        </button>
        <h3>-----------------</h3>
      </div>
    );
  }
}

export default connect(null, { deleteHistorySearches })(HistorySearchesDisplay);
