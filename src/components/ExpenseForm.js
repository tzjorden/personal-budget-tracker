import React, {useState} from "react";

function ExpenseForm() {
   const [description, setDescription] = useState("")
   const [cost, setCost] = useState("")
   const [date, setDate] = useState("")
   const [monthlyamount, setMonthlyamount] = useState("")
   const [annual, setAnnual] = useState("")
   const [frequency, setFrequency] = useState("")
   const [notes, setNotes] = useState("")

    const handleSubmit = e => {
      e.preventDefault()

     const newBudget = { description, cost, date, monthlyamount, annual, frequency, notes }   

     fetch('http://localhost:9292/add_expense', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBudget)
    })

    }

  return (
     <div className="new-expense-form">
       <h2>Add Expense</h2>

       <form onSubmit={handleSubmit}>
         <input onChange={e => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
         <input onChange={e => setCost(e.target.value)} type="number" name="cost" placeholder="Cost" />
         <input onChange={e => setMonthlyamount(e.target.value)} type="number" name="monthlyamount" placeholder="Monthly Amount" />
         <input onChange={e => setAnnual(e.target.value)} type="number" name="annual" placeholder="Annual Amount" />
         <input onChange={e => setFrequency(e.target.value)} type="text" name="frequency" placeholder="Frequency" />
         <input onChange={e => setNotes(e.target.value)} type="text" name="notes" placeholder="Notes" />
         <input onChange={e => setDate(e.target.value)} type="date" name="date" step="0.01" placeholder="Due Date" />
         <button type="submit">Add Expense</button>

       </form>
     </div>
  );

  }

export default ExpenseForm;
