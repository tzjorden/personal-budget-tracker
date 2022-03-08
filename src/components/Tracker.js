import React, { useState, useEffect } from "react";
import ExpensesTable from "./ExpensesTable";
import IncomeTable from "./IncomeTable";
import Summary from "./Summary";

function Tracker() {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/expenses")
      .then((r) => r.json())
      .then((expenses) => {
        console.log(expenses);
        setExpenses(expenses);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/income")
      .then((r) => r.json())
      .then((income) => {
        console.log(income);
        setIncome(income);
      });
  }, []);

  return (
    <div>
      <ExpensesTable expenses={expenses} setExpenses={setExpenses} />
      <IncomeTable income={income} setIncome={setIncome} />
      <Summary />
    </div>
  );
}

export default Tracker;
