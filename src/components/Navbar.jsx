import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserProfile from '.components/UserProfile';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user-profile/gaearon">gaearon</Link>
        </li>
        <li>
          <Link to="/user-profile/sophie">sophie</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
