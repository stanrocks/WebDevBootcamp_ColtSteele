let maximum = parseInt(prompt('Enter the maximum number!'));

// Check if user input is a valid number. If not - repeat request until it's valid
while (!maximum) {
  maximum = parseInt(prompt('Enter a valid positive number!'));
}

// Generating random number from 1 to user defined maximum
const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') {
    break;
  }
  attempts++;
  if (guess > targetNum) {
    guess = prompt('Too high! Enter a new guess!');
  } else {
    guess = prompt('Too low! Enter a new guess!');
  }
}

if (guess === 'q') {
  console.log('OK, quitting');
} else {
  console.log('CONGRATS! YOU WIN!');
  console.log(`You got it! It took you ${attempts} guesses`);
}
