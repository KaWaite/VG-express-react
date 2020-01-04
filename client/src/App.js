import React from "react";
import "./App.css";

import NavBar from "./components/NavBar.js";
import Articles from "./components/Articles";
import UpcomingGames from "./components/UpcomingGames";
import Middle from "./components/Middle";

// import Newsletter from "./Components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <UpcomingGames />
        <Articles />
        <Middle />
        {/* <Newsletter className="newsletter" /> */}
      </div>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You are beautiful.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
