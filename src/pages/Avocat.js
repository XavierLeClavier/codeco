import {React, useRef} from 'react';
import { Link } from 'react-router-dom';

// abcdefghijklmnopqrstuvwxyz

export default function Avocat() {
    // const [ctexte, setCtexte] = useRef();
    const ctexte =useRef();

    // function changeCtexte(change){
    //     setCtexte(change);
    // }

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
    
    function updateCtexte(way){
        if (way==="AvK")
        {
            ctexte.current.value = AvK(document.getElementsByName('texte')[0].value)
        }
        else {
            ctexte.current.value = KvA(document.getElementsByName('texte')[0].value)
        }
    }
    
    return (
        <>
            <h1>Crypteur/décrypteur Avocat</h1>
            <p>
                Le cryptage "Avocat" décale toute les lettres de 10 places
                dans l'alphabet tel que la lettre "K" corresponde à la lettre
                "A" (d'où "A-vaut-K")
            </p>
            <div>
                <div>
                    <label>
                        Texte à crypter :
                        <input type="text" name="texte"/>
                    </label>
                    <button onClick={() => updateCtexte("AvK")}>Crypter</button>
                </div>
                <div>
                    <label>
                        Texte crypté :
                        <input type="text" name="ctexte" disabled={true} value={ctexte.current?.value} ref={ctexte}/>
                    </label>
                </div>
            </div>
            <Link to="/">Revenir à l'accueil</Link>
        </>
    );
}