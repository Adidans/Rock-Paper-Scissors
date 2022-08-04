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

function getPlayerChoice() {
    let input = prompt("Choose Rock Paper or Scissors");
    let choice = input.toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let result;
    switch(true){
        case playerSelection === 'rock' && computerSelection === 'paper':
            result = 'You Lose! Paper beats Rock';
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            result = 'You Win! Rock beats Scissors';
            break;
        case playerSelection === 'rock' && computerSelection === 'rock':
            result = 'Tie! Rock ties with Rock';
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            result = 'You Win! Paper beats Rock';
            break;
        case playerSelection === 'paper' && computerSelection === 'paper':
            result = 'Tie! Paper ties with Paper';
            break;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            result = 'You Lose! Scissors beats Paper';
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            result = 'You Lose! Rock beats Scissors';
            break;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            result = 'You Win! Scissors beats Paper';
            break;
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            result = 'Tie! Scissors ties with Scissors';
            break;
    }

    return result;
}

function game() {
    for (let i = 0; i < 5; i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    
}