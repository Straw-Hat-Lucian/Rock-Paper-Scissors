// Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerChoiceDisplay");
const computerDisplay = document.getElementById("computerChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    playerDisplay.textContent = "✊";
    computerDisplay.textContent = "✊";

    playerDisplay.classList.add("bouncing");
    computerDisplay.classList.add("bouncing");

    setTimeout(function(){
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        if(playerChoice === computerChoice){
            result = "IT'S A TIE!";
        }
        else{
            switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                    break;
        }

    }
    const emojis = { rock: "✊", paper: "✋", scissors: "✌️" };
    playerDisplay.textContent = emojis[playerChoice];
    computerDisplay.textContent = emojis[computerChoice];

    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
    playerDisplay.classList.remove("bouncing");
    computerDisplay.classList.remove("bouncing")
}, 1000);
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    playerDisplay.textContent = "";
    computerDisplay.textContent = "";
    resultDisplay.textContent = "";
}