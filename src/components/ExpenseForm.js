import React, { useState } from "react";

function ExpenseForm({ expenses, setExpenses }) {
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState();
  const [date, setDate] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [paid, setPaid] = useState(false);
  let today = new Date().toISOString().slice(0, 10);

  function handleFrequency(e) {
    setFrequency(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newExpense = {
      description,
      cost,
      date,
      frequency,
      dueDate,
      notes,
      paid,
    };

    fetch("http://localhost:9292/add_expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newExpense),
    });
    setExpenses([...expenses, newExpense]);
    e.target.reset();
  }

  return (
    <div className="new-expense-form">
      <h3>Add Expense</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Cost:{" "}
          <input
            required
            onChange={(e) => setCost(e.target.value)}
            value={cost}
            type="number"
            name="cost"
            placeholder="Cost"
          />
        </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          name="description"
          placeholder="Description..."
        />
        <br />
        <label>
          Frequency{" "}
          <select value={frequency} onChange={handleFrequency}>
            <option value="one-time">One-time</option>
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </select>
        </label>
        <input
          onChange={(e) => setNotes(e.target.value)}
          type="text"
          name="notes"
          placeholder="Notes..."
        />
        <br />
        <label>
          Date of expense:{" "}
          <input
            required
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            name="date"
          />
        </label>
        <label>
          Payment due date:{" "}
          <input
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
            type="date"
            name="dueDate"
            placeholder="Payment due date"
          />
        </label>
        <br></br>
        <button className="btn-submit" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
