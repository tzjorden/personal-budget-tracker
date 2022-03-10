import React from "react";
import { Routes, Route } from "react-router-dom";
import ExpensesTable from "./ExpensesTable";
import IncomeTable from "./IncomeTable";
import Summary from "./Summary";

function Tracker() {
<<<<<<< HEAD
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/expenses")
      .then((r) => r.json())
      .then((expenses) => {
        // console.log(expenses);
        setExpenses(expenses);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/income")
      .then((r) => r.json())
      .then((incomes) => {
        // console.log(incomes);
        setIncomes(incomes);
      });
  }, []);

=======
>>>>>>> 16a9af2175836b86c9643b5e6bbdcc2bceec3ce8
  return (
    <div>
      <ExpensesTable />
      <IncomeTable />
      <Summary />
    </div>
  );
}

export default Tracker;
