import React, { Component } from "react";
import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <h3>
          {" "}
          Welcome to the Currency Conveter APP{" "}
          {this.props.user && this.props.user.user
            ? this.props.user.user.username
            : null}{" "}
          :-)
        </h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};

export default connect(mapStateToProps)(Welcome);
