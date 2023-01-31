let playerScore = 0
let computerScore = 0
let round = ""

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");






let computerChoice = function (){
if (Math.floor(Math.random() * 3) === 1){
    return ("rock")
}
else if (Math.floor(Math.random() * 3) === 2){
    return ("paper")
}
else  {
    return ("scissors")
}}
let computerSelection = computerChoice()

  
let playerChoice = () => 
{
  rockButton.addEventListener("click", function(){
    return playerSelection = "rock"
  });
  
  paperButton.addEventListener("click", function(){
   return  playerSelection = "paper";
  });
  
  scissorsButton.addEventListener("click", function(){
    return playerSelection = "scissors";
  });
  // playerPick = prompt("what's your pick?").toLowerCase();
};





function playRound(playerSelection, computerSelection) { 
    if (playerSelection == "rock" && computerSelection =="scissors" ||
    playerSelection == "paper" && computerSelection =="rock"||
     playerSelection =="scissors" && computerSelection == "paper"){
      playerScore++; return `You win this round ${playerSelection} beats ${computerSelection}`
     }else if (playerSelection == computerSelection) {
        return "its a tie!"}
        else {
          computerScore++; return `You lost this round ${computerSelection} beats ${playerSelection}`
        }}

        function game(){
        
         
              
              let playerSelection = playerChoice()
              let computerSelection = computerChoice();
          
              console.log("Player's selection: " + playerSelection);
              console.log("Computer's selection: " + computerSelection);
              console.log('Result: ' + playRound(playerSelection, computerSelection));
              console.log("Score: Player " + playerScore + " - " + computerScore + " Computer.");
          }
          
          let gameOutcome= game()
          console.log(gameOutcome)