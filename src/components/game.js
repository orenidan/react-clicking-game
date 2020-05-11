import React from 'react';
import { ButtonStart } from './button-start'
import { ButtonRandom } from './button-random'

export function Game({ gameFinished }) {
    const [showButtonRandom, setShowButtonRandom] = React.useState(false)
    const [startTime, setStartTime] = React.useState(null)

    function handleStartButtonTapped() {
        const random = getRndInteger(1, 3)
        setStartTime(new Date().getTime())
        setTimeout(() => {
            setShowButtonRandom(true)
        }, random * 1000)
    }

    function handleRandomButtonRandomClick() {
        setShowButtonRandom(false)
        const endTime = new Date().getTime();
        const time = ((endTime - startTime) / 1000).toFixed(2);
        gameFinished(time)
    }

    return (
        <div>
            <ButtonStart onsStartClick={handleStartButtonTapped} />
            {showButtonRandom ? <ButtonRandom buttonRandomClick={handleRandomButtonRandomClick} /> : null}
        </div>
    )
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
