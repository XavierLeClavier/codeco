import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import Convert from '../elements/Convert.js';
import ButtonElement from '../elements/ButtonElement.js';

import exceptions from '../elements/exceptions.js';

export default function Morse() {
    const ctexte = useRef();

    const alphmorse = {
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
        9: "----.",
        "'": ".----.",
        "@": ".--.-.",
        ")": "-.--.-",
        "(": "-.--.",
        "&": ".-...",
        ":": "---...",
        ",": "--..--",
        "=": "-...-",
        "!": "-.-.--",
        ".": ".-.-.-",
        "-": "-....-",
        "+": ".-.-.",
        "?": "..--..",
        "\"": ".-..-.",
        ";": "-.-.-.",
        "_": "..--.-",
        "$": "...-..-",
        é: "..-..",
        è: ".-..-",
        à: ".--.-",
        ç: "-.-..",
        ï: "..--",
        ë: ".-...",
        ô: "---.",
        ù: "..--",
        ê: ".--.."
    }

    function TvM(sentence) {

        let result = "";
        for (let i = 0; i < sentence.length; i++) {
            let char = sentence[i].toLowerCase();
            if (char === " ") {
                result += "/ ";
            } else if (char === "\n") {
                result += "\n";
            }
            else if (alphmorse.hasOwnProperty(char)) {
                result += alphmorse[char] + " ";
            } else {
                result += char + " ";
            }
        }

        return result.trim();
    }

    function MvT(sentence) {
        let result = "";
        let words = sentence.split(" ");

        for (let i = 0; i < words.length; i++) {
            if (words[i] === "/") {
                result += " ";
            } else if (words[i] === "\n") {
                result += "\n";
            } else {
                let keys = Object.keys(alphmorse);
                let values = Object.values(alphmorse);
                if (values.includes(words[i])) {
                    result += keys[values.indexOf(words[i])];
                } else {
                    result += words[i];
                }
            }
        }
        return result.trim();
    }

    function updateCtexte(way) {
        const inputText = document.getElementsByName('texte')[0].value; // Grab the input text
        if (way === 1) {
            ctexte.current.value = TvM(inputText);
        }
        else {
            ctexte.current.value = MvT(inputText);
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