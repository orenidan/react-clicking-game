import React from 'react';
import { getHighScore } from '../helpers/high-score-provider'

export function HighScore({ currentScore, onPlayAgainClick }) {
    return (
        <div className="high-score-container">
            <button onClick={onPlayAgainClick} className="button-play-again">Play Again</button>
            <h2 className="current-score-title">Your time is <strong>{`${currentScore}`}</strong> sec</h2>
            <HighScoreTable currentScore={currentScore} />
        </div>
    )
}


function HighScoreTable({ currentScore }) {
    const highScores = getHighScore(Number(currentScore))

    return (
        <div className="high-score-table">
            <h3 className="high-score-table-title">Highest Times</h3>
            <table>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>{highScores[0]}</td>
                        <td>sec</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>{highScores[1]}</td>
                        <td>sec</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>{highScores[2]}</td>
                        <td>sec</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}