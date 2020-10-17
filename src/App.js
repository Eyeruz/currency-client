import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CurrencyInput from "./containers/CurrencyInput";
import About from "./components/About";
import History from "./components/History";

class App extends Component {
  render() {
    return (
      <Router>
        <h6>APP.JS</h6>
        <NavBar />
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={CurrencyInput} />
          <Route exact path="/about" component={About} />
          <Route exact path="/history" component={History} />
        </div>
      </Router>
    );
  }
}

export default App;
