import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="header__wrapper">
        <Link className="header__wrapper__link" to="/pre-junior">
          Pre-junior
        </Link>
        <Link className="header__wrapper__link" to="/junior">
          Junior
        </Link>
        <Link className="header__wrapper__link" to="/junior-plus">
          JuniorPlus
        </Link>
      </nav>
    </header>
  );
}

export default Header;
