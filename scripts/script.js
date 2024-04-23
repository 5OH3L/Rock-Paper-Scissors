const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
const tieDisplay = document.getElementById('tieDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const reset = document.getElementById('reset');

let playerScore = 0;
let ties = 0;
let computerScore = 0;

function playGame(playerChoice){
    let computerChoice = Math.floor(Math.random() * 3);
    if (playerChoice == 0 && computerChoice == 2){
        choiceDisplay(playerChoice, computerChoice);
        playerWins(playerChoice);
    }else if (playerChoice == 1 && computerChoice == 0){
        choiceDisplay(playerChoice, computerChoice);
        playerWins(playerChoice);
    }else if(playerChoice == 2 && computerChoice == 1){
        choiceDisplay(playerChoice, computerChoice);
        playerWins(playerChoice);
    }else if(playerChoice == computerChoice){
        choiceDisplay(playerChoice, computerChoice);
        ++ties
        resultDisplay.textContent = "It's A Tie!";
        tieDisplay.textContent = ties;
    }else{
        choiceDisplay(playerChoice, computerChoice);
        computerWins();
    }
}

function resetGame(){
    let confirmation = confirm("Are You Sure You Want To Reset ?");
    if (confirmation){
        playerScore = 0;
        playerScoreDisplay.textContent = "N/A";
        ties = 0;
        tieDisplay.textContent = "N/A";
        computerScore = 0;
        computerScoreDisplay.textContent = "N/A";
        playerChoiceDisplay.textContent = "N/A";
        computerChoiceDisplay.textContent = "N/A";
    }
}

function playerWins(playerChoice){
    ++playerScore;
    resultDisplay.textContent = "Player Wins!";
    playerScoreDisplay.textContent = playerScore;
}
function computerWins(){
    ++computerScore;
    resultDisplay.textContent = "Computer Wins!";
    computerScoreDisplay.textContent = computerScore;
}
function choiceDisplay(playerChoice, computerChoice){
    if(playerChoice == 0){
        playerChoiceDisplay.textContent = "ROCK";
    }else if(playerChoice == 1){
        playerChoiceDisplay.textContent = "PAPER";
    }else{
        playerChoiceDisplay.textContent = "SCISSORS";
    }
    if(computerChoice == 0){
        computerChoiceDisplay.textContent = "ROCK";
    }else if(computerChoice == 1){
        computerChoiceDisplay.textContent = "PAPER";
    }else{
        computerChoiceDisplay.textContent = "SCISSORS";
    }
}