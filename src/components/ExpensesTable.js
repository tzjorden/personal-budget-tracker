import React, { useState, useEffect } from "react";
import LineItemExpenses from "./LineItemExpenses";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from "uuid";

function ExpensesTable() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/expenses")
      .then((r) => r.json())
      .then((expenses) => {
        // console.log(expenses);
        setExpenses(expenses);
      });
  }, []);

  const lineItemExpenses = expenses.map((expense) => {
    return (
      <LineItemExpenses
        // key={uuidv4()}
        key={expense.id}
        description={expense.description}
        cost={`$${expense.cost}`}
        date={expense.date}
        frequency={expense.frequency}
        dueDate={expense.due_date}
        paid={expense.paid}
        notes={expense.notes}
        id={expense.id}
        setExpenses={setExpenses}
      />
    );
  });

  return (
    <div>
      <h2>Expenses</h2>
      <div>
        <select value={null} onChange={null}>
          <option value="select-timeframe">Select Timeframe</option>
          <option value="current-month">Current month</option>
          <option value="last-month">Last month</option>
          <option value="last-90-days">Last 90 days</option>
          <option value="current-year">Current year</option>
          <option value="last-year">Last year</option>
          <option value="all-time">All time</option>
        </select>
      </div>

      <div className="table">
        <div className="line-item-header">
          {/* <div className="line-item-box-btn"></div> */}
          <div className="line-item-box-header">
            <strong>Description</strong>
          </div>
          <div className="line-item-box-header">
            <strong>Cost</strong>
          </div>
          <div className="line-item-box-header">
            <strong>Date</strong>
          </div>

          <div className="line-item-box-header">
            <strong>Frequency</strong>
          </div>
          <div className="line-item-box-header">
            <strong>Due Date</strong>
          </div>
          <div className="line-item-box-header">
            <strong>Notes</strong>
          </div>
          <div className="line-item-box-header">
            <strong>Paid</strong>
          </div>
          <div className="line-item-box-header">
            <strong>Status</strong>
          </div>
        </div>
        <div className = "list-table">
          {lineItemExpenses}
        </div>
        <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
}

export default ExpensesTable;
