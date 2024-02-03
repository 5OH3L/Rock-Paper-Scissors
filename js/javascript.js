//                  Function To Get Computer's Choice.
function getComputerChoice(){

    //                  Choices
    let Choices = ["rock", "paper", "scissor"];

    //                  Pick A Number Between 0 & The Length Of Choices (3 In This Case).
    let computerChoice = Math.floor(Math.random() * Choices.length);

    //                  Return A Random String  Between "rock" "paper" "scissor" Using The Previous Random Number.
    return Choices[computerChoice];
    //
}

//                  Function To Capitalize A String.
function cap(string){

    //                  Get The First Letter Of The String & Make It UpperCase.
    let firstLetter = string[0].toUpperCase();

    //                  Add The UpperCased Letter With The Main String But Without The Main String's First Letter.
    return firstLetter + string.substr(1);   
}

function lower(string){
    return string.toLowerCase();
}

//                  Function To Build The Game Logic.
function rockPaperScissors(playerSelection, computerSelection){

    //                  Checking If Player's Choice & Computer's Choice Are Same.
    if (playerSelection == computerSelection){

        //                  If The Answer Is Same Say Both Answers & Say Tie.
        console.log("                        Tie !");
        console.log(`Player   : ${cap(playerSelection)}\nComputer : ${cap(computerSelection)}`);
        return "tie";
    }

    //                  If The Answer Is Not Same Run The Else Block Below
    else{

        //                  If Player Choose Scissor & Computer Choose Paper Then Say Player Wins.
        if (playerSelection == "scissor" && computerSelection == "paper"){
            console.log("                    Player Wins !");
            console.log(`Player   : ${cap(playerSelection)}\nComputer : ${cap(computerSelection)}`);
            return "playerWins";
        }

        //                  If Player Choose Paper & Computer Choose Rock Then Say Player Wins.
        else if ( playerSelection == "paper" && computerSelection == "rock"){
            console.log("                    Player Wins !");
            console.log(`Player   : ${cap(playerSelection)}\nComputer : ${cap(computerSelection)}`);
            return "playerWins";
        }

        //                  If Player Choose Rock & Computer Choose Scissor Then Say Player Wins.
        else if (playerSelection == "rock" && computerSelection == "scissor"){
            console.log("                    Player Wins !");
            console.log(`Player   : ${cap(playerSelection)}\nComputer : ${cap(computerSelection)}`);
            return "playerWins";
        }

        //                  If None Of Them Met The Conditions Then Say Computer Wins.
        else{
            console.log("                   Computer Wins !");
            console.log(`Player   : ${cap(playerSelection)}\nComputer : ${cap(computerSelection)}`);
            return "computerWins";
        }
    }
}

//                  Function To Show Final Score.
function showFinalScore(){
    return `|=================================|
|          ${whoWins}          |
|----------+-----------+----------|
|  Player  :    Tie    : Computer |\n|----------+-----------+----------|\n|     ${playerScore}    :     ${tieScore}     :     ${computerScore}    |
|=================================|`;
}

let playerScore = 0; // Collect How Many Times Player Won.
let computerScore = 0; // Collect How Many Times Computer Won.
let tieScore = 0; // Collect How Many Times The Game Was Tie.
let whoWins;

//                  Who Wins
if (playerScore == computerScore){
    whoWins = " It's a tie  ";
}
else if (playerScore > computerScore){
    whoWins = " Player Wins ";
}
else {
    whoWins = "Computer Wins";
}

let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let score = document.getElementById('score');
let selection = document.getElementById('selection');
let winner = document.getElementById('winnerName');
let reset = document.getElementById('reset');
let cChoice = document.getElementById('cChoice');
let pChoice = document.getElementById('pChoice');
let result = document.getElementById('result');

let scorePS = document.createElement('h1');
let scoreT = document.createElement('h1');
let scoreCS = document.createElement('h1');

scorePS.innerHTML = `Player &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${playerScore}`;
scoreT.innerHTML = `Tie &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${tieScore}`;
scoreCS.innerHTML = `Computer : ${computerScore}`;
score.appendChild(scorePS);
score.appendChild(scoreT);
score.appendChild(scoreCS);

function game(e){
    let computerChoice = getComputerChoice();
    let final = rockPaperScissors(e.target.getAttribute('answer'), computerChoice);
    if(final == "computerWins"){
        result.textContent = "Computer Won!";
        result.style.color = "red";
        computerScore += 1;
        scoreCS.innerHTML = `Computer : ${computerScore}`;
    } else if (final == "playerWins"){
        result.textContent = "Player Won!";
        result.style.color = "lightgreen";
        playerScore += 1;
        scorePS.innerHTML = `Player &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${playerScore}`;
    }else{
        result.style.color = "yellow";
        result.textContent = "It's A Tie!";
        tieScore += 1;
        scoreT.innerHTML = `Tie &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${tieScore}`;
    }

    if(computerScore === playerScore){
        winner.textContent = "Tie!";
        winnerName.style.color = "yellow";
    }else if(computerScore > playerScore){
        winner.textContent = "Computer!";
        winner.style.color = "red";
    }else if(playerScore > computerScore){
        winner.textContent = "Player!";
        winner.style.color = "lime";
    }

    pChoice.innerHTML = `Player : ${cap(e.target.getAttribute('answer'))}`;
    cChoice.innerHTML = `Computer : ${cap(computerChoice)}`;
};

btn1.addEventListener('click', game);
btn2.addEventListener('click', game);
btn3.addEventListener('click', game);

reset.addEventListener('click', () =>{
    if(confirm("Are You Sure ?")){
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;
        whoWins = "N/A";
        scoreCS.innerHTML = `Computer : ${computerScore}`;
        scorePS.innerHTML = `Player &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${playerScore}`;
        scoreT.innerHTML = `Tie &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${tieScore}`;
        result.innerHTML = "N/A"; result.style.color = "black";
        winner.innerHTML = "N/A"; winner.style.color = "black";
        pChoice.innerHTML = `Player : N/A`;
        cChoice.innerHTML = `Computer : N/A`;
    }
});