import React from "react";
import LineItemIncome from "./LineItemIncome";

function IncomeTable({ income, setIncome }) {
  const lineItemIncome = income.map((income) => {
    return (
      <LineItemIncome
        className="line-item"
        key={income.id}
        description={income.description}
        amount={income.amount}
        notes={income.notes}
        id={income.id}
        setIncome={setIncome}
      />
    );
  });

  return (
    <div className="Summary">
      <h2>Income</h2>
      <div className="line-item">
        <div className="line-item-box-btn"></div>
        <div className="line-item-box">
          <strong>Description</strong>
        </div>
        <div className="line-item-box">
          <strong>Amount</strong>
        </div>
        <div className="line-item-box">
          <strong>Notes</strong>
        </div>
        <div className="line-item-box-btn"></div>
      </div>
      {lineItemIncome}
    </div>
  );
}

export default IncomeTable;
