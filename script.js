const age = 14
let guess = 0

while (guess !== age) {
  guess = prompt('My age between 1 and 20')
  if (guess < age) {
    alert('Your guess was too small, try again')
  } else if (guess > age) {
    alert('Your guess was too big, try again')
  } else {
    alert('You guessed correctly. Good Job!')
  }
}
