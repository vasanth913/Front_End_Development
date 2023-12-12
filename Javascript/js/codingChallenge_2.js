let playGame = confirm ("Shall we play Rock, Paper, or Scissors");

if(playGame){

        let playerChoice = prompt("Please enter rock, paper or scissors");

        if(playerChoice){
            let playerOne = playerChoice.trim().toLowerCase();
            if( 
                playerOne === 'rock' ||
                playerOne === 'paper' ||
                playerOne === 'scissors'
            ) {
                let computerChoice =  Math.floor(Math.random() * 3 + 1);

                console.log('computerChoice **', computerChoice);

                let computer = computerChoice === 1 ?
                'rock' : computerChoice === 2 ? 'paper' 
                : 'scissors';

                let result = 
                  
                playerOne === computer
                ? "Tie Game !" 
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\n Computer: ${computer}\n Computer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\n Computer: ${computer}\n Computer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\n Computer: ${computer}\n Computer wins!`
                : `playerOne: ${playerOne}\n Computer: ${computer}\n PlayerOne wins!`
                alert(result);
                let playAgain = confirm("Play Again");
                playAgain ? location.reload(): alert("Ok, thanks for playing.");
            }
            else {
                alert ("You didn't enter rock,paper or scissors");
                location.reload();
            }
        } 
        else {
            alert("I guess you changed your mind, try next time");
        }
        
    } else {
        alert ('May be next time');
    }
   
