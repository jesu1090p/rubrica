import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav-foot.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/Content">Content</Link>
        </li>
        <li>
          <Link to="/Create">Create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

