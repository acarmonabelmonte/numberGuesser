let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    const target = Math.floor(Math.random() * 10);
    return target;
}

const getAbsoluteDistance = (number, target) => {
    let distance = Math.abs(number - target);
    return distance;
}

const compareGuesses = (userGuess, computerGuess, secretTarget) => {

    if (userGuess > 0 && userGuess < 9) {
        alert('Out of range');
    };

    let userDifference = getAbsoluteDistance(userGuess, secretTarget);
    let computerDifference = getAbsoluteDistance(computerGuess, secretTarget);

    if (userDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}