import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Tracker from "./Tracker";
import Summary from "./Summary";
import IncomeTable from "./IncomeTable";
import ExpensesTable from "./ExpensesTable";

function App() {
  return (
    <>
      <h1>Personal Budget Tracker</h1>
      <Navbar />
      <Tracker />

      <Routes>
        <Route path="/income" element={<IncomeTable />} />
        <Route path="/expenses" element={<ExpensesTable />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </>
  );
}

export default App;
