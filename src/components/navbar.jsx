import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`links ${isOpen ? 'active' : ''}`}>
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link style={{ marginTop: '8px' }} to="/cart">
          <ShoppingCart size={25} />
        </Link>
      </div>
    </div>
  );
};
