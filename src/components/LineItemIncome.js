import React, { useState, useEffect } from "react";

function LineItemIncome({ description, amount, date, notes, id, setIncomes }) {
  // const [remove, setRemove] = useState(false);

  function handleDelete(e) {
    fetch(`https://mighty-basin-20153.herokuapp.com/delete_incomes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      console.log(resp);
    });
    setIncomes((currentIncome) =>
      currentIncome.filter((income) => income.id !== id)
    );
  }

  function handleEdit(e) {
    e.preventDefault();
  }

  return (
    <div className="line-item">
      {/* <div className="line-item-box-btn">
        <button className="btn" onClick={handleEdit} value={id}>
          ✎
        </button>
      </div> */}
      <div className="line-item-box">{description}</div>
      <div className="line-item-box">{amount}</div>
      <div className="line-item-box">{date}</div>
      <div className="line-item-box">{notes}</div>
      <div className="line-item-box-btn">
        <button className="btn" onClick={handleDelete} id={id}>
          🗑
        </button>
      </div>
    </div>
  );
}

export default LineItemIncome;
