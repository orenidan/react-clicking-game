
const key = 'highScore'

export function getHighScore(userScore) {
    const highScores = getStoredScores(key)
    var lowestScore = userScore
    var newHighScores = [0, 0, 0]

    for (let i = 0; i < 3; i++) {
        var oldScore = highScores[i]
        if (oldScore === 0.0) {
            newHighScores[i] = lowestScore;
            break
        } else if (lowestScore < oldScore) {
            newHighScores[i] = lowestScore;
            lowestScore = oldScore
        } else {
            newHighScores[i] = oldScore
        }
    }
    storeHighScores(newHighScores)
    return newHighScores
}

export function resetHighScores() {
    window.localStorage.removeItem(key)
}

function getStoredScores(key) {
    var storedScores = window.localStorage.getItem(key)
    if (storedScores == null || storedScores === undefined || storedScores === 'null') {
        return [0, 0, 0]
    }

    return storedScores.split(',').map((num) => Number(num))
}

function storeHighScores(highScores) {
    window.localStorage.setItem(key, highScores)
}