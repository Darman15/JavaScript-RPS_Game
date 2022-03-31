let playGame = confirm("shall we play rock , paper scissors? ");

if (playGame) {
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";

      let result =
        playerOne === computer
          ? "Tie Game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\n Computer: ${computer}
        \n Computer Wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}
        \n Computer Wins`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\n Computer: ${computer}
        \nComputer wins`
          : `playerOne: ${playerOne}\nComputer: ${computer}
        \nplayerOne wins!`;
      alert(result);
    } else {
      alert("you didn't enter rock, paper or scissors");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time");
  }
} else {
  alert("Ok, maybe next time");
}
