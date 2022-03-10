import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ExpensesTable from "./ExpensesTable";
import IncomeTable from "./IncomeTable";
import Summary from "./Summary";

function Tracker() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/expenses")
      .then((r) => r.json())
      .then((expenses) => {
        // console.log(expenses);
        setExpenses(expenses);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/income")
      .then((r) => r.json())
      .then((incomes) => {
        // console.log(incomes);
        setIncomes(incomes);
      });
  }, []);

  return (
    <div>
      <ExpensesTable expenses={expenses} setExpenses={setExpenses} />
      <IncomeTable incomes={incomes} setIncomes={setIncomes} />
      <Summary
        incomes={incomes}
        setIncomes={setIncomes}
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </div>
  );
}

export default Tracker;
