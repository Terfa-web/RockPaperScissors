const wordsArray = ['rock', 'paper', 'scissors']

function computerChoice() {
  const randomNumber = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return  "It's a tie!";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissors' && computerSelection === 'paper') {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

  let gameOver = false;

  const rockImage = document.querySelector('.rock');
  const paperImage = document.querySelector('.paper');
  const scissorsImage = document.querySelector('.scissors');

  let playerScore = 0;
  let  computerScore = 0;

function game(e) {
    
  if(gameOver) {
    return;
  }else{
    const resultDiv = document.querySelector(".card.first")
    const divParagraph = document.querySelector(".card.first p")
    
    
    
      //get players and computer choice
      const playerSelection = e.target.className ;
      const computerSelection = computerChoice();
      let result = playRound(playerSelection, computerSelection);
  
   
      
      //use innerHTMl to display outcome in div
      
      divParagraph.textContent = result;
      resultDiv.appendChild(divParagraph);
      
  
      // increment or decrement scores for computer and player
      if (result.includes('You win!')) {
        playerScore++;
        
      } else if (result.includes('You lose!')) {
        computerScore++;
       
      }

      if (computerScore >=5 || playerScore >=5) {
        endGame(playerScore,computerScore);
      }
  }

}


let result= '';

function endGame(computerScore,playerScore) {       

          //final decision and display result in a div
        if (playerScore > computerScore) {
          result +=`You win the game! Final score: ${playerScore}-${computerScore}`;
        } else if (computerScore > playerScore) {
          result += `You lose the game! Final score: ${computerScore}-${playerScore}`;
        } else {
        result +=`It's a tie! Final score: ${playerScore}-${computerScore}`;
        }
        

        const resultDiv = document.querySelector(".card.first")
        const divParagraph = document.querySelector(".card.first p")

        divParagraph.textContent = result;
        resultDiv.appendChild(divParagraph);

        gameOver = true;
} 





rockImage.addEventListener("click", game);
paperImage.addEventListener("click", game);
scissorsImage.addEventListener("click", game);