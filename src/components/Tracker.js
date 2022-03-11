import React from "react";
import { Routes, Route } from "react-router-dom";
import ExpensesTable from "./ExpensesTable";
import IncomeTable from "./IncomeTable";
import Summary from "./Summary";

function Tracker() {

  return (
    <div>
      <ExpensesTable />
      <IncomeTable />
      <Summary />
    </div>
  );
}

export default Tracker;
