const randomChoice = ['paper', 'rock', 'scissors'];
let roundMessage;
let computerChoice;
let userInput;

const getComputerChoice = () => {
    return computerChoice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

const getUserChoice = () => {
    do{
        userInput = prompt('Please choose from Rock, Paper, and Scissors.').toLowerCase();
        if(userInput == 'scissors' || userInput == 'paper' || userInput == 'rock' || userInput == 'bomb'){
            break;
        }else{
            userInput = prompt('That is not a legal selection, please choose from Rock, Paper, or Scissors.').toLowerCase();
            if(userInput == 'scissors' || userInput == 'paper' || userInput == 'rock'){
                break;
            }
        }
    }
    while(userInput != 'scissors' || userInput != 'paper' || userInput != 'rock' || userInput != 'bomb');
    }

const playRound = () => {
    getUserChoice();
    getComputerChoice();
     switch(userInput + computerChoice){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            roundMessage = `You chose ${userInput} and the Computer chose ${computerChoice}.\nYou WIN!`;
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            roundMessage = `You chose ${userInput} and the computer chose ${computerChoice}.\nYou LOSE!`;
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            roundMessage = `You chose ${userInput} and the computer chose ${computerChoice}.\nIt is a DRAW!`;
            break;
        case 'bombpaper':
        case 'bombrock':
        case 'bombscissors':
            roundMessage = `You chose ${userInput} and that is the secret cheat code.\nWINNER WINNER CHICKEN DINNER!`;
    }
}

const playGame = () => {
    playRound();
    alert(roundMessage);
}

playGame();