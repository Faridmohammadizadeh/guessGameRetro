'use strict';

// NEWPART SECRETNUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

// NEWPART

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  document.querySelector('.score').textContent = score;

  // NEWPART checker

  if (!guessNumber) {
    console.log((document.querySelector('.message').textContent = 'WTF?'));
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = 'You are great!';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      if (guessNumber > secretNumber) {
        document.querySelector('.message').textContent = 'high';
      } else {
        document.querySelector('.message').textContent = 'low';
      }
    } else {
      document.querySelector('.message').textContent = 'Loser!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// NEWPART

document.querySelector('.again').addEventListener('click', function () {
  console.log('clicked');
  score = 20;
  document.querySelector('.score').textContent = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
