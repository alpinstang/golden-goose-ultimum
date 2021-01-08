import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to={'/'}>
        <Logo className="logo" alt="crown-clothing" />
      </Link>
      <div className="options">
        <Link className="option">SHOP</Link>
        <Link className="option">CONTACT</Link>
      </div>
    </div>
  );
};

export default Header;
