import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import './Navigation.scss';

const Navigation = ({ cartSize }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
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
        <Button variant="contained" color="error" onClick={handleLogOut}>
          Log out
        </Button>
      </nav>
    </header>
  );
};

export default Navigation;
