function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

(function () {

  let attempts = 3;
  let randomNumber = Math.floor(Math.random() * 10) + 1;


  window.start = function () {

    let number;

    function getNumber() {

      number = prompt('Угадайте число от 1 до 10');

      while (!isNumber(number) && number !== null) {
        alert('Вы вводите не число');
        number = prompt('Угадайте число от 1 до 10')
      };
      return number;
    }

    let correctNum = getNumber();

    console.log(randomNumber)

    do {

      if (correctNum === null) {
        alert('конец игры!');
        break;
      } 
      else if (correctNum == randomNumber) {
        break;
      }
      else if (randomNumber > correctNum) {
        alert('Загаданное число больше' + ' Осталось попыток: ' + attempts);
        correctNum = getNumber();
      } 
      else {
        alert('Загаданное число меньше' + ' Осталось попыток: ' + attempts);
        correctNum = getNumber();
      }
      attempts--;
    }

    while (attempts > 0);

    if (correctNum == randomNumber) {
      alert('Вы угадали!');
    } 
    else {
      alert('Вы проиграли!');
    }

    if (confirm('Начать новую игру?')) {
      attempts = 3;
      randomNumber = Math.floor(Math.random() * 10) + 1;
      start();
    }
  }
})();