'use strict'

let btn = document.querySelector('.btn__translate')

btn.addEventListener('click', function () {

  let req = new XMLHttpRequest();
  let API_KEY = 'trnsl.1.1.20200523T124239Z.409493fc600b0c99.e4dddd629414b00d6fd0234a9847ed2670566753';
  let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

  let textToTranslate = document.querySelector('.text__input').value
  if (textToTranslate.trim() === "") {
    alert('Введите текст')
  }
  else {
    let lang1 = document.querySelector('.original__lang').value
    let lang2 = document.querySelector('.lang__to-translate').value

    url += '?key=' + API_KEY;
    url += `&text=${textToTranslate}`;
    url += `&lang=${lang1}-${lang2}`;


    let translate = document.querySelector('.translated__text');

    req.addEventListener('load', function () {
      console.log(req.response);
      var response = JSON.parse(req.response);

      if (response.code !== 200) {
        translate.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
        return;
      }

      if (response.text.length === 0) {
        translate.innerHTML = 'К сожалению, перевод для данного слова не найден';
        return;
      }

      translate.textContent = response.text.join('<br>');
    });

    req.open('get', url);
    req.send();
  }
});