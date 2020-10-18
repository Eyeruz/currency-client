import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import History from "./components/History";
import Searches from "./components/Searches";
import SearchLinks from "./components/SearchLinks";
import SearchHistory from "./components/SearchHistory";
class App extends Component {
  render() {
    return (
      <Router>
        <h6>APP.JS</h6>
        <NavBar />
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/history" component={History} />
          <Route exact path="/search-history" component={SearchHistory} />
          <Route exact path="/currencySearches" component={Searches} />
          {/* <Route exact path="/HistorySearches" component={} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
