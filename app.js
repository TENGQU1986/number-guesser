const result = Math.floor(Math.random() * 10) + 1;
console.log(result);
let count = 3;

document.querySelector('#guess-form').addEventListener('submit', compare);

function compare(e) {
  const userInput = document.querySelector('.guess').value;
  const finalResult = document.querySelector('.result');
  function startOver() {
    document.querySelector('#submit').value = 'submit';
    count = 3;
    finalResult.textContent = '';
    userInput = '';
  }
  if(document.querySelector('#submit').value === 'submit') {
    if(count != 1) {
      count--;
      if(userInput == result) {
        finalResult.textContent = `${result} is correct`;
        document.querySelector('#submit').value = 'Play Again'

      } else {
        finalResult.textContent = `Guess again, you have ${count} chances left`;
      }
    } else {
      finalResult.textContent = 'Game Over';
      document.querySelector('#submit').value = 'Try again';
    }
  } else {
    startOver();
  }

  
  
  e.preventDefault();
}
