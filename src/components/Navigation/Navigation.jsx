import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = ({ cartSize }) => {
  return (
    <header className="container">
      <nav className="subcontainer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart {cartSize}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
