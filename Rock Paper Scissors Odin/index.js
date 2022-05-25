let computerHands = ["rock", "paper", "scissors"]
let randomGeneratedHand = computerHands[Math.floor(Math.random() * computerHands.length)];





function playRound() {
    let userPrompt = prompt("Choose Rock, Paper or Scissors: ");
    if (userPrompt.toLowerCase() == "rock") {
        if (randomGeneratedHand == "scissors") {
            return "You picked Rock, Computer picked Scissors, You Win!"
        } else if (userPrompt.toLowerCase() == "rock") {
            if (randomGeneratedHand == "rock") {
                return "You picked Rock, Computer picked Rock, it's a tie!"
            } else {
                return "You picked Rock, Computer picked Paper, You lose..." 
            }
        }
    }
    if (userPrompt.toLowerCase() == "paper") {
        if (randomGeneratedHand == "rock") {
            return "You picked Paper, Computer picked Rock, You Win!"
        } else if (userPrompt.toLowerCase() == "paper") {
            if (randomGeneratedHand == "paper") {
                return "You picked Paper, Computer picked Paper, it's a tie!"
            } else {
                return "You picked Paper, Computer picked Scissors, You lose..."
            }
        }
    }
    if (userPrompt.toLowerCase() == "scissors") {
        if (randomGeneratedHand == "paper") {
            return "You picked Scissors, Computer picked Paper, You Win!"
        } else if (userPrompt.toLowerCase() == "scissors") {
            if (randomGeneratedHand == "scissors") {
                return "You picked Scissors, Computer picked Scissors, it's a tie!"
            } else {
                return "You picked Scissors, Computer picked Rock, You lose..."
            }
        }
    }
    
  }



function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(playRound())

      }
}


game()