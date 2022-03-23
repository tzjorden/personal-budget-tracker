import React, { useState, useEffect } from "react";
import LineItemExpenses from "./LineItemExpenses";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from "uuid";

function ExpensesTable() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("https://mighty-basin-20153.herokuapp.com/expenses")
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
          {/* <div className="line-item-box-header">
            <strong>Paid</strong>
          </div> */}
          <div className="line-item-box-header">
            <strong>Status</strong>
          </div>
          <div className="line-item-box-header">
            <strong>Notes</strong>
          </div>
        </div>
        <div className="list-table">{lineItemExpenses}</div>

        <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
}

export default ExpensesTable;
