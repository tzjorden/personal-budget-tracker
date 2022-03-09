import React from "react";
import LineItemExpenses from "./LineItemExpenses";

function ExpensesTable({ expenses, setExpenses }) {
  console.log(expenses);
  const lineItemExpenses = expenses.map((expense) => {
    return (
      <LineItemExpenses
        className="line-item"
        key={expense.id}
        description={expense.description}
        monthly={expense.monthly}
        annual={expense.annual}
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
    <div className="table">
      <h2>Expenses</h2>
      <div className="line-item">
        <div className="line-item-box-btn"></div>
        <div className="line-item-box">
          <strong>Description</strong>
        </div>
        <div className="line-item-box">
          <strong>Monthly</strong>
        </div>
        <div className="line-item-box">
          <strong>Annual</strong>
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
          <strong>Remove</strong>
        </div>
      </div>
      {lineItemExpenses}
    </div>
  );
}

export default ExpensesTable;
