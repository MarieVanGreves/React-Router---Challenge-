import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserProfile from '.components/UserProfile';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user-profile/pierre">Pierre</Link>
        </li>
        <li>
          <Link to="/user-profile/paul">Paul</Link>
        </li>
        <li>
          <Link to="/user-profile/jacques">Jacques</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
