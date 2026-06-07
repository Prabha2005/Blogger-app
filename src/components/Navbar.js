import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Blogger App</h2>

      <ul>
        <li>
    <Link to="/">Home</Link>
  </li>
        <li>Blogs</li>
         <li>
    <Link to="/documentation">Documentation</Link>
  </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;