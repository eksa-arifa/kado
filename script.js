const message = document.querySelector('.message .tengah');
const body = document.querySelector('body');
const kado = document.querySelector('.kado');
const kotak = document.querySelector('.kotak');

let audio = new Audio('tepuk.mp3');
let type = "MAS LOVE YOU";
let speed = 200;

let i = 0;

function ketik(){
  if (i < type.length) {
    message.innerHTML += type.charAt(i);
    i++;
    
    setTimeout(ketik, speed);
  }
}



kado.onclick = ()=>{
  kado.classList.add('animasi');
  setTimeout(()=>{
    kotak.classList.add('active');
    kado.classList.add('buka');
  }, 2000)
  setTimeout(()=>{
    kado.classList.add('hilang');
    ketik();
    audio.play();
  }, 2100)
}
