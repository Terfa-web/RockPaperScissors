


const wordsArray= ['rock', 'paper', 'scissors'];

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

  const rockImage = document.querySelector('.rock');
  const paperImage = document.querySelector('.paper');
  const scissorsImage = document.querySelector('.scissors');



function game(e) {
  
  let playerScore = 0;
  let computerScore = 0;
  const resultDiv = document.querySelector(".card.first")
  const divParagraph = document.querySelector(".card.first p")
  
  for (let i = 0; i < 5; i++) { 
  
    //get players and computer choice
    const playerSelection = e.target.className ;
    const computerSelection = computerChoice();
    const result = playRound(playerSelection, computerSelection);

    //add computer image choice to result
    
    //use innerHTMl to display outcome in div
    
    divParagraph.textContent = result;
    resultDiv.appendChild(divParagraph);
    //document.appendChild(resultDiv);

    // increment or decrement scores for computer and player
    if (result.includes('You win!')) {
      playerScore++;
    } else if (result.includes('You lose!')) {
      computerScore++;
    }
  }


  //final decision and display result in a div
  if (playerScore > computerScore) {
    //result =`You win the game! Final score: ${playerScore}-${computerScore}`;
  } else if (computerScore > playerScore) {
   // result = `You lose the game! Final score: ${computerScore}-${playerScore}`;
  } else {
   //result =`It's a tie! Final score: ${playerScore}-${computerScore}`;
  }
}

rockImage.addEventListener("click", game);
paperImage.addEventListener("click", game);
scissorsImage.addEventListener("click", game);