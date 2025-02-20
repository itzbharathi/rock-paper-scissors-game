// Sound Effects
const winSound = new Audio("win.mp3");
const loseSound = new Audio("lose.mp3");
const drawSound = new Audio("draw.mp3");

const choices = ["rock", "paper", "scissors"];
const resultDisplay = document.getElementById("result");
const winCount = document.getElementById("win-count");
const loseCount = document.getElementById("lose-count");
const drawCount = document.getElementById("draw-count");

let wins = 0, losses = 0, draws = 0;

// Function to get AI choice
function getAIChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to check winner
function getWinner(player, ai) {
    if (player === ai) return "draw";
    if ((player === "rock" && ai === "scissors") ||
        (player === "paper" && ai === "rock") ||
        (player === "scissors" && ai === "paper")) {
        return "win";
    }
    return "lose";
}

// Game Logic
document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function () {
        const playerChoice = this.id;
        const aiChoice = getAIChoice();
        
        // Shake animation before showing results
        resultDisplay.classList.add("shake");
        setTimeout(() => {
            resultDisplay.classList.remove("shake");

            const outcome = getWinner(playerChoice, aiChoice);
            if (outcome === "win") {
                wins++;
                winSound.play();
                resultDisplay.innerHTML = `🎉 You Win! ${playerChoice} beats ${aiChoice}`;
            } else if (outcome === "lose") {
                losses++;
                loseSound.play();
                resultDisplay.innerHTML = `😞 You Lose! ${aiChoice} beats ${playerChoice}`;
            } else {
                draws++;
                drawSound.play();
                resultDisplay.innerHTML = `🤝 It's a Draw! You both chose ${playerChoice}`;
            }

            // Update Scoreboard
            winCount.textContent = wins;
            loseCount.textContent = losses;
            drawCount.textContent = draws;
        }, 500);
    });
});
