import React, { useState } from "react";

function ExpenseForm({ expenses, setExpenses }) {
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [paid, setPaid] = useState(false);

  const handleSubmit = (e) => {
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

    fetch("http://localhost:9292/add_expense", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExpense),
    });
    setExpenses([...expenses, newExpense]);
    e.target.reset();
  };

  return (
    <div className="new-expense-form">
      <h3>Add Expense</h3>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
          onChange={(e) => setCost(e.target.value)}
          type="number"
          name="cost"
          placeholder="Cost"
        />
        <input
          onChange={(e) => setFrequency(e.target.value)}
          type="text"
          name="frequency"
          placeholder="Frequency"
        />
        <input
          onChange={(e) => setNotes(e.target.value)}
          type="text"
          name="notes"
          placeholder="Notes"
        />
        <label>
          <br />
          Date of expense:{" "}
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            placeholder="Date"
          />
        </label>

        <label>
          {" "}
          Payment due date:
          <input
            onChange={(e) => setDueDate(e.target.value)}
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
