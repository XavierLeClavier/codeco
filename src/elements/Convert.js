import React, { useState, useRef } from 'react';
import ButtonElement from './ButtonElement';

function Convert({ ctexte, updateCtexte, playSound, affichelire, affichepar, downloadMorseCode }) {
    const [vitesseValue, setVitesseValue] = useState('0');
    // const [baseValue, setBaseValue] = useState('10');

    const handleVitesseChange = (event) => {
        const newValue = event.target.value;
        setVitesseValue(newValue);
    };

    function copier() {
        navigator.clipboard.writeText(ctexte.current.value);
    }

    const [textAreaValue, setTextAreaValue] = useState('');

    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
    };

    const ntext = useRef();
    const vitesse = useRef();
    const base = useRef();

    const clearTextArea = () => {
        setTextAreaValue('');
        ntext.current.focus();
    };

    return (
        <div className="border-2 rounded my-2 flex">
            <div className='m-4 flex-grow flex justify-center flex-col md:flex-row gap-3'>
                <div className='w-full flex flex-col'>
                    <ButtonElement
                        arrowFunction={clearTextArea}
                        text='Effacer'
                        bStyle='md:hidden block place-self-end' />
                    <textarea
                        ref={ntext}
                        name="texte"
                        value={textAreaValue}
                        onChange={handleTextAreaChange}
                        id="texte"
                        className='p-4 w-full flex-grow border border-gray-300 rounded-md resize-none'
                        placeholder='Saisir votre message à crypter/décrypter'
                    />
                </div>
                <div className='flex md:flex-col flex-row justify-center md:justify-around gap-5'>
                    <div className='flex justify-between'>
                        <ButtonElement
                            arrowFunction={clearTextArea}
                            text='Effacer'
                            bStyle='hidden md:block place-self-start'
                        />
                        {affichelire &&
                            <div className='hidden md:flex flex-col'>
                                <select ref={vitesse} className='place-self-end' value={vitesseValue} onChange={handleVitesseChange}>
                                <option value='0'>Rapide</option>
                                <option value='1'>Lent</option>
                                <option value='2'>Coco</option>
                                </select>
                                <ButtonElement
                                    text='Lire'
                                    arrowFunction={() => playSound(ctexte.current.value, vitesse.current.value)}
                                />
                                {/* <ButtonElement
                                    text='Télécharger'
                                    arrowFunction={downloadMorseCode} /> */}
                            </div>
                        }
                        {affichepar &&
                            <input
                                type='number'
                                className='w-3/6 hidden md:flex flex-col'
                                placeholder='Base'
                                name='base'
                                ref={base}
                            />}
                    </div>
                    <ButtonElement
                        arrowFunction={() => updateCtexte(1)}
                        bStyle='bg-secondary rounded'
                        extra={{}}
                        pStyle='m-8'
                        text='Crypter' />
                    <ButtonElement
                        arrowFunction={() => updateCtexte(0)}
                        bStyle='bg-secondary rounded'
                        extra={{}}
                        pStyle='m-8'
                        text='Décrypter' />
                </div>
                {affichelire &&
                    <div className='md:hidden flex'>
                        <select ref={vitesse} className='mr-2' value={vitesseValue} onChange={handleVitesseChange}>
                            <option value='0'>Rapide</option>
                            <option value='1'>Lent</option>
                            <option value='2'>Coco</option>
                        </select>
                        <ButtonElement
                            text='Lire'
                            arrowFunction={() => playSound(ctexte.current.value, vitesse.current.value)}
                        />
                        {/* <ButtonElement
                            text='Télécharger'
                            arrowFunction={downloadMorseCode} /> */}
                    </div>
                }
                {affichepar &&
                    <input
                        type='number'
                        className='w-12 md:hidden flex'
                        placeholder='Base'
                        name='base'
                        ref={base}
                    />}
                <div className='w-full flex flex-col'>
                    <textarea
                        ref={ctexte}
                        disabled={true}
                        name='convertedtext'
                        className='cursor-text w-full flex-grow p-4 border border-gray-300 rounded-t-md resize-none'
                        readOnly
                        placeholder='Résultat'
                    />
                    <ButtonElement
                        arrowFunction={copier}
                        extra={{ "data-tooltip-target": "tooltip-light", "data-tooltip-style": "light" }}
                        bStyle="bg-quaternary rounded-b"
                        pStyle="text-white self-center my-2"
                        text="Copier"
                    />
                </div>
            </div>
        </div>
    );
}

export default Convert;
