//ROCK-PAPER-SCISSORS//

const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetBtn = document.getElementById("resetBtn");
const WIN = "YOU WIN!🎉";
const LOSE = "YOU LOSE!!";
const TIE = "IT'S A TIE!!";
let playerScore = 0;
let computerScore = 0;



function playGame(playerChoice){
    

    const computerChoice = choices[Math.floor( Math.random() * choices.length )];    //Random index of the array 'choices'
    let result = '';

    if(playerChoice === computerChoice){
        result = TIE;
    }

    else{
        switch(playerChoice){

            case "rock":
                result = (computerChoice === "scissors") ? WIN : LOSE;
            break;

            case "paper":
                result = (computerChoice === "rock") ? WIN : LOSE;
            break;

            case "scissors":
                result = (computerChoice === "paper") ? WIN : LOSE;
            break;
        }
    }

    resultDisplay.classList.remove("win", "lose" ); //reset the states before adding new classes

    

    switch(result){
        case WIN:
            resultDisplay.classList.add("win");
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
        break;

        case LOSE:
            resultDisplay.classList.add("lose");
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
        break;
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

}

resetBtn.addEventListener("click" , () => {
    resultDisplay.classList.remove("win", "lose" );
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "The game has reset!";
})
