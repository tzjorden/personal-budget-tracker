import React, { useState } from "react";

function Summary({ incomes, setIncomes, expenses, setExpenses }) {
  const [timeframe, setTimeframe] = useState("current-month");

  function handleTimeframe(e) {
    setTimeframe(e.target.value);
  }

  const displaySummary = function () {
    let selectedTimeframe = null;
    let date = new Date();
    let currentMonth = date.getMonth().toString();
    let currentYear = date.getFullYear().toString();
    // console.log(date, currentMonth, currentYear);
    if (timeframe === "current-month") {
      selectedTimeframe = incomes.filter((income) => {
        income.date.includes(currentMonth) && income.date.includes(currentYear);
      });
    }
    console.log(selectedTimeframe);
  };

  displaySummary();

  return (
    <div>
      <h2>Your Financial Summary:</h2>
      <label>Select Timeframe: </label>
      <select value={timeframe} onChange={handleTimeframe}>
        <option value="current-month">Current month</option>
        <option value="last-month">Last month</option>
        <option value="90-day">Last 90 days</option>
        <option value="current-year">Current year</option>
        <option value="last-year">Last year</option>
        <option value="custom">custom</option>
      </select>
      <p>
        <strong>Income: </strong> $100
      </p>
      <p>
        <strong>Expenses: </strong> $1000
      </p>
      <p>
        <strong>Outstanding bills (unpaid): </strong>$750
      </p>
    </div>
  );
}

export default Summary;
