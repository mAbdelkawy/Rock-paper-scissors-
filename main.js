
    // get computer choice 
    function getComputerChoice(){

        // generate a random number between 1 and 10
        let randomNumber = Math.random()*10;

        // Choose rock if the number less than 3.33
        if (randomNumber < 3.33) {
            return "rock" ;
        }
        // Choose paper if the number more than 6.66
        else if (randomNumber > 6.66) {
            return "paper" ;
        }
        // Choose scissor if its not both
        else {
            return "scissor" ;
        }
    }
    // play a single round 
    function singleRound(){

        // assign the value of the functions to variables
        let playerSelection = this.textContent ;
        let computerSelection = getComputerChoice();

        if (playerSelection === "Rock") {
            switch (computerSelection) {
                case "rock": 
                    resultPane.textContent = "Rock and Rock is a tie";
                    updateScore ();
                    break;

                case "paper":
                    computer += 1;
                    resultPane.textContent = "You lose! Paper beats Rock";
                    updateScore ();
                    break;
                
                case "scissor": 
                    player += 1;
                    resultPane.textContent = "You win! Rock beats scissor";
                    updateScore ();
                    break;

            }
        }
        else if (playerSelection === "Paper") {
            switch (computerSelection) {
                case "rock": 
                    player += 1;
                    resultPane.textContent = "You win! Paper beats Rock";
                    updateScore ();
                    break;

                case "paper":
                    resultPane.textContent = "Paper and Paper is a tie";
                    updateScore ();
                    break;
                
                case "scissor": 
                    computer += 1;
                    resultPane.textContent = "You lose! Scissor beats Paper";
                    updateScore ();
                    break;
            }
        }
        else if (playerSelection === "Scissor") {
            switch (computerSelection) {
                case "rock": 
                    computer += 1;
                    resultPane.textContent = "You lose! Rock beats Scissor";
                    updateScore ();
                    break;

                case "paper":
                    player += 1;
                    resultPane.textContent = "You win! Scissor beats Paper";
                    updateScore ();
                    break;
                
                case "scissor": 
                    resultPane.textContent = "Scissor and Scissor is a tie";
                    updateScore ();
                    break;
            }
        }

    function updateScore () {
        resultScore.textContent = `You: ${player} Computer: ${computer}`;
        if (player === 5) {
            resultPane.textContent = "You Won!";
            player = 0 ;
            computer = 0 ;
        }
        if (computer === 5) {
            resultPane.textContent = "Fucking loser";
            player = 0 ;
            computer = 0 ;
        }
    }

}

    let choices = document.querySelectorAll('#btn') ;
    choices.forEach(choice => choice.addEventListener('click', singleRound));
    let resultPane = document.querySelector('#result');
    let resultScore = document.querySelector('#resultScore');

    


    // Make two variables to contain the score 
    let player = 0 ;
    let computer = 0;


    

    
    