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
          <NavLink to="/search-history">View Your Currency Searches</NavLink>
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
{
  /* <Route exact path="/home" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/history" component={History} />
<Route exact path="/search-history" component={SearchHistory} />
<Route exact path="/currencySearches" component={Searches} />
<Route exact path="/signin" component={SignIn} />
<Route exact path="/signup" component={SignUp} /> */
}
