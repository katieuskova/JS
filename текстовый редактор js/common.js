'use strict'

let textBlock = document.querySelector('.text__block')
let btnSave = document.querySelector('.save-text__btn')
let btnCancel = document.querySelector('.cancel__btn')
let btnEdit = document.querySelector('.edit-text__btn')
let text = document.querySelector('.text');


btnEdit.addEventListener('click', function () {
    textBlock.setAttribute('contenteditable', 'true')
    btnSave.disabled = false
    btnCancel.disabled = false
    btnEdit.disabled = true
})

btnSave.addEventListener('click', function () {
    textBlock.removeAttribute('contenteditable', 'true')
    btnSave.disabled = true
    btnCancel.disabled = true
    btnEdit.disabled = false
    addToStorage();
})

btnCancel.addEventListener('click', function () {
  textBlock.removeAttribute('contenteditable', 'true')
  btnSave.disabled = true;
  btnCancel.disabled = true;
  btnEdit.disabled = false;
  getFromStorage()

})

function addToStorage() {
  let savedText = text.innerHTML
  localStorage.setItem('key', savedText);
}

function getFromStorage() {
  if (localStorage.getItem('key') !== null) {
    let a = localStorage.getItem('key')
    text.innerHTML = a;
  }
}

getFromStorage();