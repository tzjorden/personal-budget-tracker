import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summary from "./Summary";
import Navbar from "./Navbar";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";

function App() {
  return (
    <div className="App">
      
      <h1>Personal Budget Tracker</h1>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/income'  element={<IncomeForm/>} />
            <Route path='/expense' element={<ExpenseForm/>} />
            <Route path='/summary' element={<Summary/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

