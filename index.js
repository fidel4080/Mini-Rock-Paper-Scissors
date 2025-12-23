//ROCK-PAPER-SCISSORS//

const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;



function playGame(playerChoice){
    

    const computerChoice = choices[Math.floor( Math.random() * 3 )];    //Random index of the array 'choices'
    let result = '';

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!!";
    }

    else{
        switch(playerChoice){

            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!🎉" : "YOU LOSE!!";
            break;

            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!🎉" : "YOU LOSE!!";
            break;

            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!🎉" : "YOU LOSE!!";
            break;
        }
    }

    resultDisplay.classList.remove("win", "lose" ); //reset the states before adding new classes

    switch(result){
        case "YOU WIN!🎉":
            resultDisplay.classList.add("win");
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
        break;

        case "YOU LOSE!!":
            resultDisplay.classList.add("lose");
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
        break;
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

}
