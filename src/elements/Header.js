import { Link } from 'react-router-dom';
import React from 'react';

import logo from '../img/codeco.png';

function Header() {
    return (
        <header className='bg-quaternary flex items-center justify-center gap-2 text-white'>
            <Link to="/" className='flex'>
                <img src={logo} alt="logo" className='w-24' />
            </Link>
            <Link to="/" className='flex'>
                <p>Codeco</p>
            </Link>
            <p>|</p>
            <Link to='/morse' className='flex justify center'>
                <p>Morse</p>
            </Link>
            <Link to="/avocat" className='flex justify-center'>
                <p>Avocat</p>
            </Link>
            <Link to="/cassis" className='flex justify-center'>
                <p>Cassis</p>
            </Link>
            <Link to="/bases" className='flex justify-center'>
                <p>Bases</p>
            </Link>
        </header>
    );
}

export default Header;