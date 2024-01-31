import React from 'react';
import { Link } from 'react-router-dom';

import avocado from '../img/avocado.png';
import cassis from '../img/blackcurrant.png';

function Accueil() {
    return (
        <main className='flex justify-center'>
            <div className="w-10/12">
                <h1 className="text-h1">Bienvenue sur Codeco</h1>
                <p>
                    Si vous êtes un animateur à la recherche d'une touche de magie et d'aventure pour vos jeux, vous êtes au bon endroit.
                    Nous sommes ravis de partager avec vous notre passion pour les codes secrets et les énigmes. Que ce soit pour des
                    chasses au trésor passionnantes, des jeux de piste intrigants ou des activités de groupe dynamiques, Codeco est
                    là pour ajouter une étincelle de créativité à vos animations.
                </p>

                <ul>
                    <p>
                        Découvrez une multitude de codes fascinants :
                    </p>
                    <li>
                        L'astucieux <Link to="/avocat">Code Avocat</Link>, pour les détectives en herbe.
                    </li>
                    <li>
                        Le joyeux <Link to="/cassis">Code Cassis</Link>, parfait pour les sourires des plus jeunes.
                    </li>
                    <p>(en développement)</p>
                    <li>
                        Le légendaire Code César, qui éveillera l'explorateur en chacun.
                    </li>
                    <li>
                        Le mystérieux Code Morse, idéal pour des aventures en plein air.
                    </li>
                </ul>
                <p>
                    Avec "Codeco", créer des messages codés devient un jeu d'enfant. Notre interface est conçue pour être conviviale
                    et amusante, vous permettant de vous concentrer sur l'essentiel : le plaisir de vos participants.

                    Alors, n'hésitez pas, plongez dans l'univers captivant des codes et des énigmes avec "Codeco". Nous sommes
                    impatients de vous voir émerveiller et inspirer vos groupes avec des moments inoubliables. Amusez-vous bien
                    et que l'aventure commence !
                </p >

                <h2 className="text-h2">Codeco, votre meilleur assistant pour coder et décoder tout vos messages !</h2>
            </div>
        </main>
    )
}

export default Accueil;