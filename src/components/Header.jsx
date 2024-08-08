import React, { useState } from 'react';
import './Header.css';
import logo from '../../public/images/logo-modified.png';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>AlonsoCorporation</h1>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#inicio" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#acerca" className="nav-link">Acerca de</a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-link">Contáctanos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
