import React from 'react'
import { render } from '@testing-library/react'
import { getHighScore } from '../helpers/high-score-provider'
import { HighScore } from './high-score'

jest.mock('../helpers/high-score-provider')

it('Renders the high scores', () => {
    const highScores = ["1.2", "6.6", "9.3"]
    const currentScore = "10"
    getHighScore.mockReturnValue(highScores)
    const { getByText } = render(<HighScore currentScore={currentScore} />)

    expect(getByText(currentScore)).toBeInTheDocument()

    highScores.forEach(score => 
        expect(getByText(score)).toBeInTheDocument()
    )
})