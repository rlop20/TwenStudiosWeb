import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { faHome, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Twen Digital</div>

      <Link to="/" className="navbar-home">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>

      <Link to="/games" className="navbar-home">
        <FontAwesomeIcon icon={faGamepad} /> Games
      </Link>

    </nav>
  );
}

export default NavBar;