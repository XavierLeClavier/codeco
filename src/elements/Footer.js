import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Footer() {
    return (
        <footer className='bg-quaternary'>
            <div className='flex justify-around text-white items-center gap-3 m-2'>
            <Link to="/">
                Codeco, site de codage et décodage de messages secrets.
            </Link>
            <p className='block md:hidden'>|</p>
            <p>
                License Apache 2.0
            </p>
            <p className='block md:hidden'>|</p>
            <a href="https://github.com/XavierLeClavier/codeco" className='flex gap-4 items-center'>
                <p>Lien du projet</p>
                <img src={logo} alt='logo' className='max-h-20'/>
            </a>
            </div>
        </footer>
    );
}