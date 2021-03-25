const number = 14
let guess = 0

while (guess !== number) {
  guess = prompt('Guess a number between 1 and 20')
  if (guess < number) {
    alert('Your guess was too small, try again')
  } else if (guess > number) {
    alert('Your guess was too big, try again')
  } else {
    alert('You guessed correctly. Good Job!')
  }
}
