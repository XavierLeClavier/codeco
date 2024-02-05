import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Convert from '../elements/Convert.js';
import ButtonElement from '../elements/ButtonElement.js';

import exceptions from '../elements/exceptions.js';

export default function Cassis() {
    const ctexte = useRef();
    
    function KS(sentence) {
        let result ="";
        const min = "abcdefghijklmnopqrstuvwxyz";
        const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const chiffres = ["22","23","24","25","26","01","02","03","04","05","06","07","08","09","10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21"];
        sentence = exceptions(sentence);

        for (let i=0; i<sentence.length; i++) {
            if (min.includes(sentence[i])) {
                result += chiffres[min.indexOf(sentence[i])]
                result += " ";
            }
            else if (maj.includes(sentence[i])) {
                result += chiffres[maj.indexOf(sentence[i])];
                result += " ";
            }
            else if (sentence[i] === " ") {
                result += " / ";
            }
            else {
                result += sentence[i];
            }
        }

        return result;
    }

    function SK(sentence) {
        let result ="";
        const min = "abcdefghijklmnopqrstuvwxyz";
        const chiffres = ["22","23","24","25","26","01","02","03","04","05","06","07","08","09","10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21"];
        sentence = exceptions(sentence);

        for (let i=0; i<sentence.length; i++) {
            if (chiffres.includes(sentence[i]+sentence[i+1])) {
                result += min[chiffres.indexOf(sentence[i]+sentence[i+1])];
                i++;
            }
            else if (sentence[i] === " " && sentence[i+1] === "/" && sentence[i+2] === " ") {
                result += " ";
                i += 2;
            }
            else {
                if (sentence[i] !== ' '){
                    result += sentence[i];
                }
            }
        }

        result.replace(/(?<! ) (?! )/g, '');

        return result;
    }
    
    function updateCtexte(way){
        if (way === "KS") {
            ctexte.current.value = KS(document.getElementsByName('texte')[0].value)
        }
        else {
            ctexte.current.value = SK(document.getElementsByName('texte')[0].value)
        }
    }
    return (
        <div className='bg-primary flex justify-center'>
            <div className="w-10/12">
                <h1 className="text-h1">Crypteur/décrypteur Cassis</h1>
                <p>
                    Le cryptage "Cassis" ou "K6" est un chiffrement par substitution. Où "06" correspont
                    à la lettre "K", "07" correspont à "L", "22" correspond à "A" etc...
                </p>
                <Convert 
                    ctexte={ctexte}
                    updateCtexte={updateCtexte}
                    cryptway='KS'
                    decryptway='SK'/>
                <p>N.B. Mettre des " / " pour les espaces, saisir les nombres par paire (07 au lieu de 7)</p>
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