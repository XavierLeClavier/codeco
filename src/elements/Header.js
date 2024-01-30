import { Link } from 'react-router-dom';
import React from 'react';

import img from '../img/envelope.png';

function Header() {
    return (
        <header className='bg-quaternary flex items-center justify-center gap-2'>
            <Link to="/" className='flex'>
                <img src={img} alt="logo" className='w-24' />
            </Link>
            <Link to="/" className='flex'>
                <p>Codeco</p>
            </Link>
            <Link to="/avocat" className='flex justify-center'>
                <p>Avocat</p>
            </Link>
            <Link to="/cassis" className='flex justify-center'>
                <p>Cassis</p>
            </Link>
        </header>
    );
}

export default Header;