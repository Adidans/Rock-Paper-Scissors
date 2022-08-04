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