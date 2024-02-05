import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import Convert from '../elements/Convert.js';
import ButtonElement from '../elements/ButtonElement.js';

import exceptions from '../elements/exceptions.js';

export default function Morse() {
    const ctexte = useRef();

    const alphabet = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
        0: "-----",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----."
    }

    function TvM(sentence) {
        sentence = exceptions(sentence);

        let result = "";
        for (let i = 0; i < sentence.length; i++) {
            let char = sentence[i].toLowerCase();
            if (char === " ") {
                result += " ";
            } else if (char === " ") {
                result += '/';
            }
            else if (alphabet.hasOwnProperty(char)) {
                result += alphabet[char] + " ";
            } else {
                result += char + " ";
            }
        }
    
        return result.trim(); // Trim to remove trailing space
    }

    function MvT(sentence) {        
        let result = "";
        let words = sentence.split(" ");
        for (let i = 0; i < words.length; i++) {
            for (let [key, value] of Object.entries(alphabet)) {
                if (value === words[i]) {
                    result += key;
                }
            }
        }
        return result;
    }

    function updateCtexte(way) {
        if (way === "TvM") {
            ctexte.current.value = TvM(document.getElementsByName('texte')[0].value)
        }
        else {
            ctexte.current.value = MvT(document.getElementsByName('texte')[0].value)
        }
    }

    return (
        <div className='bg-primary flex justify-center'>
            <div className="w-10/12">
                <h1 className="text-h1">Crypteur décrypteur Morse</h1>
                <p>
                    Le code Morse, développé dans les années 1830 par Samuel Morse et Alfred
                    Vail, est un système de codage des lettres et des chiffres utilisant des
                    séries de points et de traits. Essentiellement utilisé en télégraphie, il
                    a permis la communication à longue distance avant l'avènement des
                    technologies modernes, jouant un rôle crucial dans les domaines maritime
                    et militaire pour sa simplicité et son efficacité.
                </p>
                <Convert
                    ctexte={ctexte}
                    updateCtexte={updateCtexte}
                    cryptway='TvM'
                    decryptway='MvT' />
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