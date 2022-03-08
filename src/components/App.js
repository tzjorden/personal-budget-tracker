import React from "react";
import Tracker from "./Tracker";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Personal Budget Tracker</h1>
      <Tracker />
    </div>
  );
}

export default App;
