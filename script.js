'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  let message = '';
  let secret = '?';
  console.log(guess, typeof guess);

  switch (true) {
    case guess === secretNumber: {
      message = '🎉 Correct Number!';
      secret = secretNumber;
      highscore = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      break;
    }
    case !guess: {
      message = '❌ No number';
      highscore = 0;
      secret = '?';
      break;
    }
    case guess < secretNumber: {
      if (score === 1) {
        message = '💥 You lost the game';
        secret = '?';
        score--;
        break;
      } else if (score === 0) {
        message = '💥 You lost the game';
        secret = '?';
        break;
      } else {
        message = 'Too small';
        secret = '?';
        score--;
        break;
      }
    }
    case guess > secretNumber: {
      message = 'Too big';
      secret = '?';
      score--;
      break;
    }
    default: {
      message = '❌ No number';
      secret = '?';
      break;
    }
  }

  console.log(score);

  document.querySelector('.number').textContent = secret;
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});
