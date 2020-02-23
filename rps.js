
  const getComputerChoice = (computerInput) => {
    computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
      return "rock";
    } else if (computerInput === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  let computerChoice = getComputerChoice();

  let userChoice;
  let rpsArray = document.querySelectorAll(".pic");

  console.log(rpsArray);
 
  const determineWinner = () => {
    if (userChoice === computerChoice) {
      return "Tie! 😐";
    } else if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper') {
      return "You won! 😃";
    } else {
      return "You lost! ☹️";
    }
  }

  const showResult = () => {
    document.querySelector("#result").innerHTML = `Your choice ${userChoice}, computer's choice: ${computerChoice} <br> ${determineWinner()}`;

  }

  rpsArray.forEach(el => el.addEventListener("click", () => {
    userChoice = el.id;
    getComputerChoice();
    determineWinner();
    showResult();
  }));
