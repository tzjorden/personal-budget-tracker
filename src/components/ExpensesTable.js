import React from "react";
import LineItemExpenses from "./LineItemExpenses";
import ExpenseForm from "./ExpenseForm";

function ExpensesTable({ expenses, setExpenses }) {
  const lineItemExpenses = expenses.map((expense) => {
    return (
      <LineItemExpenses
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
            <strong>Mark paid</strong>
          </div>
        </div>
        {lineItemExpenses}
        <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
}

export default ExpensesTable;
