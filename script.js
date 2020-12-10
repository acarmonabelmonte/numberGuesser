let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    Math.floor(Math.random() * 10)
}

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    let userDifference = Math.abs(userGuess - secretTarget);
    let computerDifference = Math.abs(computerGuess - secretTarget);

    if (userDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
}