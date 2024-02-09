import React from "react";
import { Link } from "react-router-dom";

export default function Presentation(props) {

    return (
        <Link to={props.destination} className='flex flex-col justify-between hover:shadow-2xl shadow-inner rounded w-48 bg-quaternary'>
            <h1 className='text-h1 text-center text-white'>{props.title}</h1>
            <p className='text-center text-white'>
            {props.description}    
            </p>
            <img src={props.image} alt={props.alt} className='rounded-md w-48 h-auto mx-auto mt-5 block bottom-0' />
        </Link>
    )
}