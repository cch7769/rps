

var userChoice = prompt('Please enter Rock, Paper or Scissors.');
userChoice = userChoice.toLowerCase();

if (userChoice === 'rock' || userChoice === 'paper' 
    || userChoice === 'scissors') {
    document.write('You picked ' + userChoice + '<br />' )
} else {
    document.write('Please pick something specified.')
}

var computerPick = Math.random();
var computerChoice = 'scissors';
if (computerPick < 0.34) {
    computerChoice = 'rock';
} else if (computerPick <= 0.66 ) {
    computerChoice = 'paper';
} 

document.write('The computer picked: ' + computerChoice);




}
if (choice1 == 'rock') {
    if (choice2 == 'paper' ) {
        return 'The computer won!'
    } else {
        return 'You WON!!!'
    }
}

if (choice1 == 'paper')
   if (choice2 == 'scissors')