import React, { useState, useRef } from 'react';
import ButtonElement from './ButtonElement';

function Convert({ ctexte, updateCtexte }) {

    function copier() {
        navigator.clipboard.writeText(ctexte.current.value);
    }

    const [textAreaValue, setTextAreaValue] = useState('');

    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
    };

    const ntext = useRef();

    const clearTextArea = () => {
        setTextAreaValue('');
        ntext.current.focus()
    };

    return (
        <div className="border-2 rounded my-2 flex">
            <div className='m-4 flex-grow flex justify-center flex-col md:flex-row gap-3'>
                <div className='w-full flex flex-col'>
                <ButtonElement
                        arrowFunction={clearTextArea}
                        text='Clear'
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
                    <ButtonElement
                        arrowFunction={clearTextArea}
                        text='Effacer'
                        bStyle='hidden md:block place-self-start' />
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
