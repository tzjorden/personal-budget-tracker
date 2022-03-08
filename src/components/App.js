import React from "react";
import Summary from "./Summary";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Personal Budget Tracker</h1>
      <Summary />
    </div>
  );
}

export default App;
