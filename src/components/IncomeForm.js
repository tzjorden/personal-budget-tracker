import React, { useState } from "react";

function IncomeForm({ incomes, setIncomes }) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState();
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newIncome = {
      description,
      date,
      amount,
      notes,
    };

    fetch("https://mighty-basin-20153.herokuapp.com/add_income", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newIncome),
    });
    setIncomes([...incomes, newIncome]);
    e.target.reset();
  }

  return (
    <div className="new-income-form">
      <h3>Add Income</h3>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="form-border"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
          required
          className="form-border"
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          name="amount"
          placeholder="Amount"
        />

        <input
          className="form-border"
          onChange={(e) => setNotes(e.target.value)}
          type="text"
          name="notes"
          placeholder="Notes"
        />
        <br />
        <label>
          Date
          <input
            required
            className="form-border"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            name="date"
          />
        </label>

        <br />
        <button className="btn-submit" type="submit" value="Submit">
          Add Income
        </button>
      </form>
    </div>
  );
}

export default IncomeForm;
