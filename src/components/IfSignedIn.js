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
      <ul className="navbar">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/history">View Currency From the Past</NavLink>
        </li>
        <li>
          <NavLink to="/searchlinks">View Currency Searches</NavLink>
        </li>
        <li>
          {/* <NavLink to="/search-history">
            {/* View Your Currency History Searches
          </NavLink> */}
        </li>

        <li onClick={this.logout}>
          {" "}
          <NavLink to="/">Logout </NavLink>{" "}
        </li>
      </ul>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    destroySession: (history) => dispatch(destroySession(history)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(IfSignedIn));
