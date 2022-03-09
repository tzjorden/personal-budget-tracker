import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/income">Income Form</Link>
      <Link to="/expense">
        Expense Form
      </Link>
      <Link to="/summary">
         Summary
      </Link>
    </nav>
  );
}

export default Navbar;

