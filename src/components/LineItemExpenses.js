import React, { useState, useEffect } from "react";

function LineItemExpenses({
  description,
  cost,
  date,
  frequency,
  dueDate,
  paid,
  notes,
  id,
  setExpenses,
}) {
  function handleMarkAsPaid(e) {
    fetch(`https://mighty-basin-20153.herokuapp.com/update_expense/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paid: !paid }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log(resp);
        setExpenses((currentExpenses) => {
          return currentExpenses.map((expense) =>
            expense.id == id ? resp : expense
          );
        });
      });
  }

  function handleDelete(e) {
    fetch(`https://mighty-basin-20153.herokuapp.com/delete_expense/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // .then((resp) => resp.json());
    setExpenses((currentExpenses) => {
      return currentExpenses.filter((expense) => expense.id !== id);
    });
  }

  // function handleEdit(e) {
  //   e.preventDefault();
  // }

  return (
    <div className="line-item">
      {/* <div className="line-item-box-btn">
        <button className="btn" onClick={null} value={id}>
          ✎
        </button>
      </div> */}
      <div className="line-item-box">{description}</div>
      <div className="line-item-box">{cost}</div>
      <div className="line-item-box">{date}</div>
      <div className="line-item-box">{frequency}</div>
      <div className="line-item-box">{dueDate}</div>
      <div className="line-item-box">
        {paid}
        <button className="btn" onClick={handleMarkAsPaid} id={id}>
          {paid ? "✅" : "🅇"}
        </button>
      </div>
      <div className="line-item-box">{notes}</div>
      {/* <div className="line-item-box-btn">
        <button className="btn" onClick={handleMarkAsPaid} id={id}>
          {paid ? "✅" : "🅇"}
        </button>
      </div> */}
      <div className="line-item-box-btn">
        <button className="btn" onClick={handleDelete} id={id}>
          🗑
        </button>
      </div>
    </div>
  );
}

export default LineItemExpenses;
