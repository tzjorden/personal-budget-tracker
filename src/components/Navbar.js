import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { NavLink, Routes, Route } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/expenses">Expenses</NavLink>
      <NavLink to="/income">Income</NavLink>
      <NavLink to="/summary">Summary</NavLink>
    </nav>
  );
}

export default Navbar;
