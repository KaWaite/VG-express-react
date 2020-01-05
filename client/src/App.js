import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar.js";
import Template from "./components/template/Template";
import Main from "./components/Main";
// import Newsletter from "./Components/Newsletter";
import Footer from "./components/Footer";

// Experimental components
import About from "./components/Routes practice/About";
import List from "./components/Routes practice/List";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main">
          <Switch>
            {/* main route */}
            <Route exact path="/" component={Main} />

            {/* About path */}
            <Route path="/about" component={About} />

            {/* Template path */}
            <Route path="/backend-template" component={Template} />

            {/* List path */}
            <Route path="/game-list" component={List} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
