import React, { useState } from "react";

function IncomeForm({ incomes, setIncomes }) {
  let today = new Date().toISOString().slice(0, 10);
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

    fetch("http://localhost:9292/add_income", {
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
<<<<<<< HEAD
      <form onSubmit={handleSubmit} className="form-container">
        <input className = "form-border"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          placeholder="Description"
        />
        <input className = "form-border"
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          name="amount"
          placeholder="Amount"
        />

        <input className = "form-border"
          onChange={(e) => setNotes(e.target.value)}
          type="text"
          name="notes"
          placeholder="Notes"
        />
        <br />
        <label>
          Date
          <input className = "form-border"
=======

      <form onSubmit={handleSubmit}>
        <label>
          Amount:{" "}
          <input
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="number"
            name="amount"
            placeholder="Amount..."
          />
        </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          placeholder="Description..."
        />
        <br />
        <label>
          Date:{" "}
          <input
            required
>>>>>>> 16a9af2175836b86c9643b5e6bbdcc2bceec3ce8
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            name="date"
          />
        </label>
        <input
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          type="text"
          name="notes"
          placeholder="Notes..."
        />
        <br />
        <button className="btn-submit" type="submit" value="Submit">
          Add Income
        </button>
      </form>
    </div>
  );
}

export default IncomeForm;
