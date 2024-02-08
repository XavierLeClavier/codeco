import React from "react";

export default function Presentation(props) {

    return (
        <div className='flex flex-col justify-center justify-items-center border-2 rounded'>
            <h1 className='text-h1 text-center'>placeholder</h1>
            <p className='text-center'>
                lorem ipsum dolor sit amet,lorem ipsum
                dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,
            </p>
            <img src={props.image} alt="blackcurrant" className='rounded-md w-5/6 mx-auto' />
        </div>
    )
}