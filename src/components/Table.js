import React, { useState, useEffect } from "react";
import LineItem from "./LineItem";

function Table() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/expenses")
      .then((r) => r.json())
      .then((expenses) => {
        console.log(expenses);
        setExpenses(expenses);
      });
  }, []);

  console.log("expenses", expenses);

  const lineItem = expenses.map((expense) => {
    return (
      <LineItem
        className="line-item"
        key={expense.id}
        description={expense.description}
        monthly={expense.monthly}
        annual={expense.annual}
        frequency={expense.frequency}
        notes={expense.notes}
      />
    );
  });

  return (
    <div className="table">
      <h2>Summary</h2>
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
          <strong>Notes</strong>
        </div>
        <div className="line-item-box-btn"></div>
      </div>
      {lineItem}
    </div>
  );
}

export default Table;
