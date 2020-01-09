import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import NavBar from "./components/persistentUI/NavBar";
import Template from "./components/template/Template";
import Main from "./components/MainPage/Main";
import MainPS4 from "./components/ConsolePages/MainPS4";
import MainSwitch from "./components/ConsolePages/MainSwitch";
import MainXboxOne from "./components/ConsolePages/MainXboxOne";
import Game from "./components/Game";
import Footer from "./components/persistentUI/Footer";

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

            {/* ************* CONSOLE ROUTES(TOP) ************* */}
            {/* PS4 game page */}
            <Route exact path="/games/PS4" component={MainPS4} />

            {/* Switch game page */}
            <Route exact path="/games/Switch" component={MainSwitch} />

            {/* XboxOne game page */}
            <Route exact path="/games/XboxOne" component={MainXboxOne} />
            {/* ************* CONSOLE ROUTES(BOTTOM) ************* */}

            {/* general page route */}
            <Route path="/games/PS4/:game" component={Game} />
            {/* ROUTES I MIGHT NOT USE */}
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
