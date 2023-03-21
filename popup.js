const img = document.querySelector('#imgFondo');
const boton = document.querySelector('#change-message');

let imgActual = 1;

boton.addEventListener('click',() => {
    if (imgActual=== 1) {
        img.src = "kakashi2.png";
        imgActual = 2;
      } else {
        img.src = "kakashi.png";
        imgActual = 1;
      }
})