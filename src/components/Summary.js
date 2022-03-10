import React, { useState, useEffect } from "react";

function Summary({ incomes, setIncomes, expenses, setExpenses }) {
  const [timeframe, setTimeframe] = useState("select-timeframe");
  const [displayExpensesSummary, setDisplayExpensesSummary] = useState("");
  const [displayIncomesSummary, setDisplayIncomesSummary] = useState("");

  function handleTimeframe(e) {
    setTimeframe(e.target.value);
    fetch(`http://localhost:9292/expenses_summary/${e.target.value}`)
      .then((r) => r.json())
      .then((displayExpensesSummary) => {
        console.log(displayExpensesSummary);
        setDisplayExpensesSummary(displayExpensesSummary);
      });

    fetch(`http://localhost:9292/incomes_summary/${e.target.value}`)
      .then((r) => r.json())
      .then((displayIncomesSummary) => {
        console.log(displayIncomesSummary);
        setDisplayIncomesSummary(displayIncomesSummary);
      });
  }

  return (
    <div>
      <h2>Your Financial Summary:</h2>
      <select value={timeframe} onChange={handleTimeframe} className = "form-border">
        <option value="select-timeframe">Select Timeframe</option>
        <option value="current-month">Current month</option>
        <option value="last-month">Last month</option>
        <option value="last-90-days">Last 90 days</option>
        <option value="current-year">Current year</option>
        <option value="last-year">Last year</option>
        <option value="all-time">All time</option>
        {/* <option value="custom">custom</option> */}
      </select>
      <p>
        <strong>Income: </strong>${displayIncomesSummary.toLocaleString()}
      </p>
      <p>
        <strong>Expenses: </strong> ${displayExpensesSummary.toLocaleString()}
      </p>
      <p>
        <strong>Outstanding bills (unpaid): </strong>FILL IN
      </p>
    </div>
  );
}

export default Summary;
