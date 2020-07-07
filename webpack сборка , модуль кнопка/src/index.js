import './button.css';
import { btnCreate, btn } from './button.js';

btnCreate();
btnCreate();
btnCreate();
btnCreate();


let buttons = document.querySelectorAll('.btn');

buttons.forEach((elem)=>{

  function makeCounter() {
    let currentCount = 1;
    return function() {
      return currentCount++;
    };
  }

   let counter = makeCounter()

  elem.addEventListener('click',()=>{
      elem.innerText = `Click ${counter()}`
  })
})





  
  
  
