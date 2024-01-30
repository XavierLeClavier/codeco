import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <header>
        <h1>Mon super site</h1>
        <Link to="/avocat">Avocat</Link>
    </header>
  );
}

export default Header;