import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import { fetchCurrencies } from "./actions/fetchCurrencies";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import History from "./components/History";
import Searches from "./components/Searches";
import SearchLinks from "./components/SearchLinks";
import SearchHistory from "./components/HistorySearches";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
class App extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
    // this.props.searches();
  }
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        {/* <SignIn /> */}
        <div className="App">
          <Switch>
            <Route exact path="/" component={Welcome} />

            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/history" component={History} />
            <Route exact path="/searchlinks" component={SearchLinks} />
            <Route
              exact
              path="/currency-history-searches"
              component={SearchHistory}
            />
            <Route exact path="/currency-searches" component={Searches} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
          {/* <Route exact path="/HistorySearches" component={} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchCurrencies })(App);
