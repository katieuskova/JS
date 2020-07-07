$('.ball').on('click', function () {

  let ball = $('.ball').width()

  function randomY(a, b) {
    a = Math.ceil(0);
    b = Math.floor($('.field').height() - ball);
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  let Y = randomY();
  let left = $('.ball').position().left

  if (left === 0) {
    $('.ball').animate({
      left: $('.field').width() - ball,
      top: Y,
    },
      2000, goal
    )
  }

  else {
    $('.ball').animate({
      left: '0',
      top: Y,
    },
      2000, goal
    )
  }


  function goal() {
    let top = $('.ball').position().top
    let gateTop = ($('.field').height()) - ($('.field').height() / 100 * 68)
    let gateBottom = ($('.field').height()) - ($('.field').height() / 100 * 33)



    if (top >= gateTop && top <= gateBottom) {
      alert('Гол!')



      if (left === 0) {

        $('.team1').text(function (index, text) {

          text = (+$('.team1').text() + 1);

          if (text !== 3) {
            return text
          }

          else {
            alert('Победа первой команды!')
            return text
          }
        })
      }

      else {
        $('.team2').text(function (index, text) {

          text = (+$('.team2').text() + 1);

          if (text !== 3) {
            return text
          }

          else {
            alert('Победа второй команды!')
            return text
          }
        })
      }
    }
  }
});