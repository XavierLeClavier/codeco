import React from 'react';

export default function Convert(props){
    return (
        <main>
            <div className="flex justify-center gap-3">
                    <div>
                        <label className='flex flex-col'>
                            <p>Texte à crypter :</p>
                            <input type="text" name="texte" />
                        </label>
                    </div>
                    <div className='flex flex-col justify-center gap-5 min-h-96 '>
                        <button onClick={() => props.updateCtexte(props.cryptway)}
                            className='bg-secondary rounded flex justify-center items-center'>
                            <p className='m-8'>
                                Crypter
                            </p>
                        </button>
                        <button onClick={() => props.updateCtexte(props.decryptway)}
                            className='bg-secondary rounded flex justify-center items-center'>
                            <p className='m-8'>
                                Décrypter
                            </p>
                        </button>
                    </div>
                    <div>
                        <label className='flex flex-col'>
                            <p>Texte crypté :</p>
                            <input type="text" name="ctexte" disabled={true} value={props.ctexte.current?.value} ref={props.ctexte} />
                        </label>
                    </div>
                </div>
        </main>
    )
}