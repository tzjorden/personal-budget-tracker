import React, {useState} from "react";

function IncomeForm() {
   const [description, setDescription] = useState("")
   const [date, setDate] = useState("")
   const [amount, setAmount] = useState("")
   const [notes, setNotes] = useState("")

    const handleSubmit = e => {
      e.preventDefault()

     const newIncome = { description, date, amount, notes }   

     fetch('http://localhost:9292/add_income', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newIncome)
    })

    }

  return (
     <div className="new-income-form">
       <h2>Add Income</h2>

       <form onSubmit={handleSubmit} className = "form-container">
         <input onChange={e => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
         <input onChange={e => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" />
         <input onChange={e => setNotes(e.target.value)} type="text" name="notes" placeholder="Notes" />
         <input onChange={e => setDate(e.target.value)} type="date" name="date" step="0.01" placeholder="Due Date" />
         <button type="submit">Add Income</button>

       </form>
     </div>
  );

  }

export default IncomeForm;