import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import Convert from '../elements/Convert.js';
import ButtonElement from '../elements/ButtonElement.js';

// abcdefghijklmnopqrstuvwxyz

export default function Avocat() {
    const ctexte = useRef();

    function AvK(sentence) {
        let result = "";
        const min = "abcdefghijklmnopqrstuvwxyz";
        const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (let i = 0; i < sentence.length; i++) {
            if (min.includes(sentence[i])) {
                result += min[(min.indexOf(sentence[i]) + 10) % 26];
            }
            else if (maj.includes(sentence[i])) {
                result += maj[(maj.indexOf(sentence[i]) + 10) % 26];
            }
            else {
                result += sentence[i];
            }
        }

        return result;
    }

    function KvA(sentence) {
        let result = "";
        const min = "abcdefghijklmnopqrstuvwxyz";
        const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (let i = 0; i < sentence.length; i++) {
            if (min.includes(sentence[i])) {
                result += min[(min.indexOf(sentence[i]) + 16) % 26];
            }
            else if (maj.includes(sentence[i])) {
                result += maj[(maj.indexOf(sentence[i]) + 16) % 26];
            }
            else {
                result += sentence[i];
            }
        }

        return result;
    }

    function updateCtexte(way) {
        if (way === "AvK") {
            ctexte.current.value = AvK(document.getElementsByName('texte')[0].value)
        }
        else {
            ctexte.current.value = KvA(document.getElementsByName('texte')[0].value)
        }
    }

    return (
        <div className='bg-primary flex justify-center'>
            <div className="w-10/12">
                <h1 className="text-h1">Crypteur/décrypteur Avocat</h1>
                <p>
                    Le cryptage "Avocat" décale toute les lettres de 10 places
                    dans l'alphabet tel que la lettre "K" corresponde à la lettre
                    "A" (d'où "A-vaut-K")
                </p>
                <Convert 
                    ctexte={ctexte}
                    updateCtexte={updateCtexte}
                    cryptway='AvK'
                    decryptway='KvA'/>
                <Link to="/">
                    <ButtonElement
                        bStyle='bg-secondary rounded'
                        pStyle='m-1'
                        text="Revenir à l'accueil"
                    />
                </Link>
            </div>
        </div>
    );
}