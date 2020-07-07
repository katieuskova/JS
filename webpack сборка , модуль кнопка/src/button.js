export let btn; 


export function btnCreate(){

  btn = document.createElement("BUTTON");
  btn.innerHTML = 'Click';
  btn.classList.add('btn')
  document.body.appendChild(btn);
}


