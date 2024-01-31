import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='flex justify-around bg-quaternary text-white'>
            <Link to="/">
                Codeco, site de codage et décodage de messages secrets.
            </Link>
            <p>
                License Apache 2.0
            </p>
            <a href="https://github.com/XavierLeClavier">
                GitHub du projet
            </a>
        </footer>
    );
}