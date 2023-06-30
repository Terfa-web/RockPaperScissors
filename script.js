
const wordList = ['rock', 'paper', 'scissors'];


let randomWord = [];

const getComputerChoice = () => {
  for(let i = 0; i<3; i++) {

    const randomNumber = Math.floor(Math.random() *  wordList.length);    
   
    randomWord = wordList[randomNumber];

  }
  

  return randomWord;
}


 let computerSelection = getComputerChoice().toLowerCase();

const getPlayersChoice = () => {
  for(let i = 0; i<3; i++) {

    const randomNumber = Math.floor(Math.random() *  wordList.length);    
   
    randomWord = wordList[randomNumber];

  }
  

  return randomWord;
}

let playerSelection = getPlayersChoice().toLowerCase();

const playRockPaperScissors = (playerSelection,computerSelection) => {
  let result = "";

  if(playerSelection === 'rock' && computerSelection === 'paper') {
      result = "You Lose! Paper beats Rock."
      comCount ++
  } else if(playerSelection === computerSelection){
    result = "It was a tie. Keep playing."
  } else if (playerSelection === 'paper' && computerSelection === 'rock'){
    result = 'you win. paper beats rock'
  }
    console.log(result);
};


playRockPaperScissors();