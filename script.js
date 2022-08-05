const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
let playerWins = document.createElement('p');
let computerWins = document.createElement('p');
let gameWinner = document.createElement('p');
const playAgain = document.querySelector('#playAgain');
let playerWinCount = 0;
let computerWinCount = 0;


function getComputerChoice(){
    let num = Math.floor(Math.random()*3)+1;
    let choice;
    switch(num){
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
    }
    return choice;
}

const result = document.createElement('p');

playAgain.addEventListener('click', () => {
    playerWinCount = 0;
    computerWinCount = 0;
    gameWinner.textContent = '';
    buttons.forEach((button) => {
        button.disabled = false;
    })
})

buttons.forEach((button) => {
    button.addEventListener('click', function handler(){
        result.textContent = playRound(button.id, getComputerChoice())
        playerWins.textContent = `Player: ${playerWinCount}`;
        computerWins.textContent = `Computer: ${computerWinCount}`;
        if(playerWinCount === 5){
            gameWinner.textContent = `Player won the game!`
            results.appendChild(gameWinner);
            buttons.forEach((button) => {
                button.disabled = true;
            })
            playAgain.disabled = false;
        }
        if(computerWinCount === 5){
            gameWinner.textContent = `Computer won the game!`
            results.appendChild(gameWinner);
            buttons.forEach((button) => {
                button.disabled = true;
            })
            playAgain.disabled = false;
        }
        results.appendChild(result);
        results.appendChild(playerWins);
        results.appendChild(computerWins);
    });
});



function playRound(playerSelection, computerSelection) {
    let result;
    switch(true){
        case playerSelection === 'rock' && computerSelection === 'paper':
            result = 'You Lose! Paper beats Rock';
            computerWinCount++;
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            result = 'You Win! Rock beats Scissors';
            playerWinCount++;
            break;
        case playerSelection === 'rock' && computerSelection === 'rock':
            result = 'Tie! Rock ties with Rock';
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            result = 'You Win! Paper beats Rock';
            playerWinCount++;
            break;
        case playerSelection === 'paper' && computerSelection === 'paper':
            result = 'Tie! Paper ties with Paper';
            break;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            result = 'You Lose! Scissors beats Paper';
            computerWinCount++;
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            result = 'You Lose! Rock beats Scissors';
            computerWinCount++;
            break;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            result = 'You Win! Scissors beats Paper';
            playerWinCount++;
            break;
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            result = 'Tie! Scissors ties with Scissors';
            break;
    }

    return result;
}