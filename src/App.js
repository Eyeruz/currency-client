import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./About.js/Home";
import NavBar from "./About.js/NavBar";
import About from "./About.js/SearchHistory";
import History from "./About.js/History";
import Searches from "./About.js/Searches";
import SearchLinks from "./About.js/SearchLinks";
import SearchHistory from "./About.js/SearchHistory";
class App extends Component {
  render() {
    return (
      <Router>
        <h6>APP.JS</h6>
        <SearchLinks />
        <NavBar />
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/history" component={History} />
          <Route exact path="/search-history" component={SearchHistory} />
          <Route exact path="/currencySearches" component={Searches} />
          <Route exact path="/HistorySearches" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
