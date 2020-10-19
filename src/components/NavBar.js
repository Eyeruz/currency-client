import React, { Component } from "react";
import { connect } from "react-redux";
import IfSignedIn from "./IfSignedIn";
import IfSignedOut from "./IfSignedOut";
export class NavBar extends Component {
  render() {
    let links;
    this.props.state.users.logged_in
      ? (links = <IfSignedIn />)
      : (links = <IfSignedOut />);
    return (
      <nav>
        <div>{links}</div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(NavBar);
