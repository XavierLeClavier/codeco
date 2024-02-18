import { React, useRef } from 'react';
import { Link } from 'react-router-dom';

import Convert from '../elements/Convert.js';
import ButtonElement from '../elements/ButtonElement.js';

export default function Bases() {
    const ctexte = useRef();

    function toDecimal(num, base) {
        let len = num.length;
        let power = 1;
        let result = 0;
        for (let i = len - 1; i >= 0; i--) {
            let digit = 0;
            if (num[i] >= '0' && num[i] <= '9') {
                digit = num[i] - '0';
            } else if (num[i] >= 'A' && num[i] <= 'Z') {
                digit = num[i].charCodeAt(0) - 'A'.charCodeAt(0) + 10;
            } else if (num[i] >= 'a' && num[i] <= 'z') {
                digit = num[i].charCodeAt(0) - 'a'.charCodeAt(0) + 10;
            }
            result += digit * power;
            power *= base;
        }
        return result;
    }
    
    function fromDecimal(num, base) {
        let result = '';
        while (num > 0) {
            let digit = num % base;
            if (digit >= 0 && digit <= 9) {
                result = String.fromCharCode(digit + '0'.charCodeAt(0)) + result;
            } else {
                result = String.fromCharCode(digit - 10 + 'A'.charCodeAt(0)) + result;
            }
            num = Math.floor(num / base);
        }
        return result;
    }

    function updateCtexte(way) {
        const inputText = document.getElementsByName('texte')[0].value; // Grab the input text
        const baseValue = document.getElementsByName('base')[0].value;

        if (way === 1) {
            ctexte.current.value = fromDecimal(inputText, baseValue);
        }
        else {
            ctexte.current.value = toDecimal(inputText, baseValue);
        }
    }

    return (
        <div className='bg-primary flex justify-center'>
            <div className="w-10/12">
                <h1 className="text-h1">Convertissez un nombre en n'importe quelle base</h1>
                <p>
                    Entrez un nombre et la base pour le convertir dans cette autre base. (bouton "Crypter")<br/>
                    Ou alors entrez un nombre et sa base actuelle pour le convertir en base 10. (bouton "Décrypter")<br/>
                    La base maximal authorisée est 36.
                </p>
                <a href="https://fr.wikipedia.org/wiki/Base_(arithm%C3%A9tique)"
                className='underline text-quaternary'>
                    Plus d'informations sur les bases
                </a>
                <Convert
                    ctexte={ctexte}
                    updateCtexte={updateCtexte}
                    affichepar={true}
                />
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