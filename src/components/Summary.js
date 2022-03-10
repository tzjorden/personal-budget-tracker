import React, { useState, useEffect } from "react";

function Summary({ incomes, setIncomes, expenses, setExpenses }) {
  const [timeframe, setTimeframe] = useState("current-month");
  const [displayTimeframe, setDisplayTimeframe] = useState("");

  function handleTimeframe(e) {
    setTimeframe(e.target.value);
    fetch(`http://localhost:9292/expense_summary/${e.target.value}`)
      .then((r) => r.json())
      .then((displayTimeframe) => {
        console.log(displayTimeframe);
        setDisplayTimeframe(displayTimeframe);
      });
  }

  return (
    <div>
      <h2>Your Financial Summary:</h2>
      <label>Select Timeframe: </label>
      <select value={timeframe} onChange={handleTimeframe}>
        <option value="current-month">Current month</option>
        <option value="last-month">Last month</option>
        <option value="last-90-days">Last 90 days</option>
        <option value="current-year">Current year</option>
        <option value="last-year">Last year</option>
        {/* <option value="custom">custom</option> */}
      </select>
      <p>
        <strong>Income: </strong>$100
      </p>
      <p>
        <strong>Expenses: </strong> ${displayTimeframe.toLocaleString()}
      </p>
      <p>
        <strong>Outstanding bills (unpaid): </strong>$750
      </p>
    </div>
  );
}

export default Summary;
