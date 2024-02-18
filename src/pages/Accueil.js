import React from 'react';

import Presentation from '../elements/Presentation';

import blackcurrant from '../img/blackcurrant.jpg';
import avocado from '../img/avocado.jpg';
import morse from '../img/morse.jpg';
import numbers from '../img/numbers.jpg';

function Accueil() {
    return (
        <div className='flex justify-center'>
            <div className="w-10/12">
                <h1 className="text-h1">Bienvenue sur Codeco !</h1>
                <p>
                    Si vous êtes un animateur à la recherche d'une touche d'aventure pour vos jeux, n'arrivez pas à résoudre
                    un message codé, ou êtes tout simplement intéréssé par vous êtes au bon endroit. Nous sommes ravis de
                    partager avec vous notre passion pour les codes secrets et les énigmes. Que ce soit pour des chasses au
                    trésor passionnantes, des jeux de piste intrigants ou des activités de groupe dynamiques, Codeco est là
                    pour ajouter une étincelle de créativité à vos animations.
                </p>

                <ul>
                    <p className='my-2'>
                        Découvrez une multitude de codes fascinants :
                    </p>
                    <div className='flex flex-wrap justify-around gap-y-2'>
                        <Presentation
                            title='Morse'
                            description="Le mystérieux Code Morse, idéal pour un thème plus sérieux."
                            alt="photo d'un jeune homme utilisant un télégraphe"
                            destination='/morse'
                            image={morse} />
                        <Presentation
                            title='Avocat'
                            description="L'astucieux Code Avocat, pour les détectives en herbe."
                            alt="image d'avocat"
                            destination='/avocat'
                            image={avocado} />
                        <Presentation
                            title='Cassis'
                            description="Le joyeux Code Cassis, pour ajouter un peu de nombres à la partie."
                            alt="image d'une pile de Cassis"
                            destination='cassis'
                            image={blackcurrant} />
                        <Presentation
                            title='Bases'
                            description="Pimentez un peu vos énigmes avec des calculs en base 2, 8, 10 et 16."
                            alt="image d'une pile de chiffres"
                            destination='bases'
                            image={numbers} />
                    </div>
                </ul>
                <p className='my-4'>
                    Avec "Codeco", créer des messages codés devient un jeu d'enfant. Notre interface est conçue pour être conviviale
                    et amusante, vous permettant de vous concentrer sur l'essentiel : le plaisir de vos participants.

                    Alors, n'hésitez pas, plongez dans l'univers captivant des codes et des énigmes avec "Codeco". Nous sommes
                    impatients de vous voir émerveiller et inspirer vos groupes avec des moments inoubliables. Amusez-vous bien
                    et que l'aventure commence !
                </p>

                <h2 className="text-h2">Codeco, votre meilleur assistant pour coder et décoder tout vos messages !</h2>
            </div>
        </div>
    )
}

export default Accueil;