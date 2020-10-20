import React, { Component } from "react";
import { destroySession } from "../actions/userActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

export class IfSignedIn extends Component {
  logout = () => {
    let history = this.props.history;
    this.props.destroySession(this.props.getAllPublishedImmortals, history);
  };
  render() {
    return (
      <>
        <div className="navbar">
          <NavLink to="/home">Home</NavLink>
        </div>
        <div className="navbar">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="navbar">
          <NavLink to="/history">View Currency From the Past</NavLink>
        </div>
        <div className="navbar">
          <NavLink to="/searchlinks">View Currency Searches</NavLink>
        </div>
        <div className="navbar" onClick={this.logout}>
          <NavLink to="/">Logout </NavLink>{" "}
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    destroySession: (history) => dispatch(destroySession(history)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(IfSignedIn));
