import React from "react";

export default function ButtonElement({ arrowFunction, extra, bStyle, pStyle, text }) {
    return (
        <button onClick={arrowFunction} {...extra}
            className={`flex justify-center items-center ${bStyle}`}>
            <p className={pStyle}>
                {text}
            </p>
        </button>
    );
}
