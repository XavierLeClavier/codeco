import React from 'react';
import {Link} from 'react-router-dom';

function Accueil(){
    return (
    <>
        <h1>Salut</h1>
        <Link to="/avocat">Avocat</Link>
    </>
    )
}

export default Accueil;