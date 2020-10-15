import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import NavBar from "./components/NavBar";
import CurrenyInput from "./containers/currencyInput";

class App extends Component {
  render() {
    return (
      <Router>
        <h6>APP.JS</h6>
        {/* <NavBar /> */}
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
        <CurrenyInput />
      </Router>
    );
  }
}

export default App;
