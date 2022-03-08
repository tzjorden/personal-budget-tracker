import React, { useState, useEffect } from "react";

function LineItem({ description, monthly, annual, frequency, notes }) {
  return (
    <div className="line-item">
      <div className="line-item-box">{description}</div>
      <div className="line-item-box">{monthly}</div>
      <div className="line-item-box">{annual}</div>
      <div className="line-item-box">{frequency}</div>
      <div className="line-item-box">{notes}</div>
    </div>
  );
}

export default LineItem;
