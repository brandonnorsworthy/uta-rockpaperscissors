//  RPS Game
var gameWins = 0;
var gameTies = 0;
var gameLosses = 0;

function userWon() {
    gameWins += 1;
    window.alert(`You won!`);
    return;
}

function computerWon() {
    gameLosses += 1;
    window.alert(`Computer won!`);
    return;
}

function startGame() {

    // 1. User - Pick a object choose from [Rock, paper, scissiors]
    var userChoice = window.prompt(`R, P, or S`);
        userChoice = userChoice.toUpperCase()
        // Using Prompt ask user to choose !RESEARCH
        // var to hold userChoice
    // 2. Computer- Pick a object choose from [Rock, paper, scissiors]
        computerChoice = Math.floor(Math.random() * 3); //pick variable 0-2
        if (computerChoice === 0) {
            computerChoice = 'R';
            window.alert("Computer chose Rock");
        } else if (computerChoice === 1) {
            computerChoice = 'P';
            window.alert("Computer chose Paper");
        } else if (computerChoice === 2) {
            computerChoice = 'S';
            window.alert("Computer chose Scissors");
        }

        console.log (`userChoice: ` + userChoice + ` computerChoice: ` + computerChoice);
        // Math.random/floor Comp picks !RESEARCH
        // var to hold compChoice
    // 3. Compare chosen objects User Vs. Computer
        // if statement to compare to userChoice to compChoice
        if (userChoice === computerChoice) {
            gameTies += 1;
            window.alert("Its a tie")
        } else if ((userChoice === 'R') && (computerChoice === 'S')) {
            userWon();
        } else if ((userChoice === 'R') && (computerChoice === 'P')) {
            computerWon();
        } else if ((userChoice === 'P') && (computerChoice === 'R')) {
            computerWon();
        } else if ((userChoice === 'P') && (computerChoice === 'P')) {
            userWon();
        } else if ((userChoice === 'S') && (computerChoice === 'R')) {
            computerWon();
        } else if ((userChoice === 'S') && (computerChoice === 'P')) {
            userWon();
        } else {
            console.log('something happendedf');
        }
        // Define computer wins and win user wins, define tie, define loss
                // Wins (User - Comp)
                    // R - S
                    // P - R
                    // S - P
                // Tie
                // Loss
    // 4. Declare User [Win,Tie,Lose]
        //  Vars to hold userWIn, userTie, userLoss
    // 5. Store Value
    window.alert(`Wins: ` + gameWins + `\nTies: ` + gameTies + `\nLosses: ` + gameLosses);
    // 6. Reset the Game
    playAgain = window.confirm(`Would you like to play again`)
    if (playAgain) {
        startGame();
    }
        // What the starting state looks like
}


startGame();