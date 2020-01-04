import React from "react";
import "./App.css";

import NavBar from "./components/NavBar.js";
import Template from "./components/template/Template";
import Articles from "./components/Articles";
import UpcomingGames from "./components/UpcomingGames";
import Middle from "./components/Middle";

// import Newsletter from "./Components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Template />
      <div className="main">
        <UpcomingGames />
        <Articles />
        <Middle />
        {/* <Newsletter className="newsletter" /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
