import React, { useState } from "react";

function IncomeForm({ incomes, setIncomes }) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIncome = { description, date, amount, notes };

    fetch("http://localhost:9292/add_income", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newIncome),
    });
    setIncomes([...incomes, newIncome]);
    e.target.reset();
  };

  // setExpenses((currentExpenses) => {
  //   return currentExpenses.map((expense) =>
  //     expense.id == id ? resp : expense
  //   );
  // });

  return (
    <div className="new-income-form">
      <h3>Add Income</h3>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          name="amount"
          placeholder="Amount"
        />

        <input
          onChange={(e) => setNotes(e.target.value)}
          type="text"
          name="notes"
          placeholder="Notes"
        />
        <br />
        <label>
          Date
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            step="0.01"
            placeholder="Due Date"
          />
        </label>
        <br />
        <button className="btn-submit" type="submit">
          Add Income
        </button>
      </form>
    </div>
  );
}

export default IncomeForm;
