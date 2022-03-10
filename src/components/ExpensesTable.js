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
        key={uuidv4()}
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
      <div className="table">
        <div className="line-item">
          {/* <div className="line-item-box-btn"></div> */}
          <div className="line-item-box">
            <strong>Description</strong>
          </div>
          <div className="line-item-box">
            <strong>Cost</strong>
          </div>
          <div className="line-item-box">
            <strong>Date</strong>
          </div>

          <div className="line-item-box">
            <strong>Frequency</strong>
          </div>
          <div className="line-item-box">
            <strong>Due Date</strong>
          </div>
          <div className="line-item-box">
            <strong>Notes</strong>
          </div>
          <div className="line-item-box">
            <strong>Paid</strong>
          </div>
          <div className="line-item-box-btn">
            <strong>Status</strong>
          </div>
        </div>
        {lineItemExpenses}
        <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
}

export default ExpensesTable;
