import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import Convert from '../elements/Convert.js';
import ButtonElement from '../elements/ButtonElement.js';

import courtshSound from '../audio/courtsh.wav';
import longshSound from '../audio/longsh.wav';
import courtlgSound from '../audio/courtlg.mp3';
import longlgSound from '../audio/longlg.mp3';

const courtsh = new Audio(courtshSound);
const longsh = new Audio(longshSound);
const courtlg = new Audio(courtlgSound);
const longlg = new Audio(longlgSound);

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
        let sentences = sentence.split("\n");

        for (let i = 0; i < sentences.length; i++) {
            let words = sentences[i].split("/");
            for (let j = 0; j < words.length; j++) {
                let chars = words[j].trim().split(" ");
                for (let k = 0; k < chars.length; k++) {
                    if (Object.values(alphmorse).includes(chars[k])) {
                        result += Object.keys(alphmorse)[Object.values(alphmorse).indexOf(chars[k])];
                    } else {
                        result += chars[k];
                    }
                }
                if (j < words.length - 1) {
                    result += " ";
                }
            }
            if (i < sentences.length - 1) {
                result += "\n";
            }
        }
        return result;
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

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function playSound(partition, vitesse) {
        let letter;
        let shortsound;
        let longsound;
        let shorttime;
        let longtime;

        if(vitesse==='1'){
            shortsound = courtlg;
            longsound = longlg;
            shorttime=800;
            longtime=1000;
        }
        else {
            shortsound = courtsh;
            longsound = longsh;
            shorttime=400;
            longtime=500;
        }

        for (let i = 0; i < partition.length; i++) {
            if (partition[i] !== letter) {
                letter = partition[i];
            }
            if (letter === '.') {
                shortsound.play();
                //pause for 245 ms
                await sleep(shorttime);
            }
            else if (letter === '-') {
                longsound.play();
                await sleep(longtime);
            }
            else if (letter === ' ') {
                await sleep(shorttime);
            }
            else if (letter === '/') {
                await sleep(longtime)
            }
            else {
                await sleep(1000)
            }
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
                    playSound={playSound}
                    affichelire={true}
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