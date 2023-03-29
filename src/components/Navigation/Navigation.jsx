import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Navigation.scss';

const Navigation = ({ cartSize }) => {
  const navigate = useNavigate();

  // დავალება: ამოიღეთ ტოკენი ლოქალ სთორიჯიდან, პარსირება
  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

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
        <button onClick={logOut}>Log out</button>
      </nav>
    </header>
  );
};

export default Navigation;
