import React from 'react';

export function ButtonRandom({ buttonRandomClick }) {
    const { innerWidth: width, innerHeight: height } = window;
    var posX = (Math.random() * (width - 50)).toFixed();
    var posy = (Math.random() * (height - 50)).toFixed();
    return (
        <button
            className={"button-random"}
            onClick={buttonRandomClick}
            style={{
                position: 'absolute',
                left: posX + 'px',
                top: posy + 'px',
                height: 50 + 'px',
                width: 100 + 'px',
                backgroundColor: '#ff511d',
                color: 'white',
                outline: 'none',
                borderRadius: '10px'
            }}
        >
            Click Me
        </button>
    )
}