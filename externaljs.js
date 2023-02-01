let playerScore = 0
let computerScore = 0
let round = ''
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome')
const playerTotal = document.createElement('h2')
const scores = document.querySelector('.scores')


let computerChoice = function (){
if (Math.floor(Math.random() * 3) === 1){
    return ('rock')
}
else if (Math.floor(Math.random() * 3) === 2){
    return ('paper')
}
else  {
    return ('scissors')
}}

function playRound(playerSelection, computerSelection) { 
    if (playerSelection == 'rock' && computerSelection =='scissors' ||
    playerSelection == 'paper' && computerSelection =='rock'||
     playerSelection =='scissors' && computerSelection == 'paper'){
      const p = document.createElement('p')
      p.innerText =`You win this round ${playerSelection} beats ${computerSelection}`;
      outcomeDiv.appendChild(p);
      playerScore++; 
     }else if (playerSelection == computerSelection) {
      const p = document.createElement('p');
      p.innerText ='its a tie!';
      outcomeDiv.appendChild(p)}
        else {
          computerScore++; 
          const p = document.createElement('p')
          p.innerText = `You lost this round ${computerSelection} beats ${playerSelection}`;
          outcomeDiv.appendChild(p);
        } }


  const checkForWinner = (playerScore,computerScore) => {
    if (playerScore === 5) {
      const h2 = document.createElement('h2')
      h2.innerText = `You've won the match ${playerScore} to ${computerScore}!`
      outcomeDiv.append(h2)
  } else if (
      computerScore === 5){
        const h2 = document.createElement('h2')
        h2.innerText = `Damn you lost ${computerScore} to ${playerScore}`
        outcomeDiv.append(h2)
  } playerTotal.innerText = `Player Score : ${playerScore}  Computer Score: ${computerScore}`
  scores.append(playerTotal)
  }
  
       
  
       
        rockButton.addEventListener('click', () => {
          const computerSelection = computerChoice()
          const playerSelection = 'rock'
          playRound(playerSelection,computerSelection)
          checkForWinner =(playerScore,computerScore)
        });
        
        paperButton.addEventListener('click', () => {
          const computerSelection = computerChoice()
          const playerSelection = 'paper'
          playRound(playerSelection,computerSelection)
          checkForWinner(playerScore,computerScore)
        });
        
        scissorsButton.addEventListener('click', () => {
          const computerSelection = computerChoice()
          const playerSelection = 'scissors'
          playRound(playerSelection,computerSelection)
          checkForWinner (playerScore,computerScore)
        });

       