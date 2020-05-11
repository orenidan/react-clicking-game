import React from 'react';

export function ButtonStart({ onsStartClick }) {
    const [didStart, setDidStart] = React.useState(false)

    function handleButtonTapped() {
        setDidStart(!didStart)
        onsStartClick()
    }

    return (
        <button
            className="button-start"
            onClick={handleButtonTapped}
            type="button"
            disabled={didStart}
        >
            {didStart ? 'Running...' : 'Start'}
        </button>
    )
}