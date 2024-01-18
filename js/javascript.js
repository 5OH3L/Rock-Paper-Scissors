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
|  Player  :    Tie    : Computer |\n|----------+-----------+----------|\n|     ${playerScore}    :     ${tieScore}     :     ${computerScore}    |
|=================================|`;
}

let playerScore = 0; // Collect How Many Times Player Won.
let computerScore = 0; // Collect How Many Times Computer Won.
let tieScore = 0; // Collect How Many Times The Game Was Tie.

//                  For Loop To Play The Game 5 Times
for (let i = 1; i <= 5; i++){

    //                  Get Player's Input.
    let playerChoice = prompt(`\t Round : ${i}\nChoose Rock || Paper || Scissor`);

    //                  Show The Round In Console.
    console.log(`                      Round : ${i}`);

    console.log("=======================================================");

    //                  If Player Press Cancel Then Alert Cancelled.
    if (playerChoice == null){
        console.log("Player Cancelled");
        alert("Cancelled");
        console.log(showFinalScore());
    }

    //                  If Player Answered Correctly Run The Game.
    if (lower(playerChoice) == "rock" || lower(playerChoice) == "paper" || lower(playerChoice) == "scissor"){
        let winner = rockPaperScissors(lower(playerChoice), getComputerChoice());
        if (winner === "playerWins"){
            playerScore++;
        }
        if (winner === "computerWins"){
            computerScore++
        }
        if (winner === "tie") {
            tieScore++
        }
    }

    //                  If Player Press OK Without Typing Anything Then Alert Player Didn't Typed.
    else if (playerChoice == ""){
        console.log("Player Didn't Type");
        alert("You Didn't Type");
    }

    //                  If Player's Answer Was Something Else Then Alert Incorrect Word.
    else{
        console.log("Incorrect Word");
        alert("Incorrect Word");
    }
    console.log("-------------------------------------------------------");
}

//                  Shows Each Player's Score ( Player & Computer )
console.log(showFinalScore());