import React from 'react';
import { Link } from 'react-router-dom';
import ButtonElement from '../elements/ButtonElement';

export default function NotFound() {
    return (<div className='flex justify-center'>
        <div className="w-10/12 flex justify-around flex-wrap flex-col">
            <h1 className="text-h1">
                Oops !
            </h1>
            <p>
                Désolé la page que vous essayez d'accéder n'est pas disponible...<br/>
                Erreur 404
            </p>
            <Link to="/">
                    <ButtonElement
                        bStyle='bg-secondary rounded'
                        pStyle='m-1'
                        text="Revenir à l'accueil"
                    />
                </Link>
        </div>
    </div>
    )
}