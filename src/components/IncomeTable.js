import React from "react";
import LineItemIncome from "./LineItemIncome";
import IncomeForm from "./IncomeForm";
import { v4 as uuidv4 } from "uuid";

function IncomeTable({ incomes, setIncomes }) {
  const lineItemIncome = incomes.map((income) => {
    return (
      <LineItemIncome
        className="line-item"
        key={uuidv4()}
        description={income.description}
        amount={`$${income.amount}`}
        date={income.date}
        notes={income.notes}
        id={income.id}
        setIncomes={setIncomes}
      />
    );
  });

  return (
    <div>
      <h2>Income</h2>
      <div className="table">
        <div className="line-item">
          {/* <div className="line-item-box-btn"></div> */}
          <div className="line-item-box">
            <strong>Description</strong>
          </div>
          <div className="line-item-box">
            <strong>Amount</strong>
          </div>
          <div className="line-item-box">
            <strong>Date</strong>
          </div>
          <div className="line-item-box">
            <strong>Notes</strong>
          </div>
        </div>
        {lineItemIncome}
        <IncomeForm incomes={incomes} setIncomes={setIncomes} />
      </div>
    </div>
  );
}

export default IncomeTable;
