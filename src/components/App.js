import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Tracker from "./Tracker";
import Summary from "./Summary";
import IncomeTable from "./IncomeTable";
import ExpensesTable from "./ExpensesTable";
import Footer from "./Footer";

function App() {
  return (
    <>
      <h1>Personal Budget Tracker</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Tracker />} />
        <Route path="/expenses" element={<ExpensesTable />} />
        <Route path="/income" element={<IncomeTable />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
