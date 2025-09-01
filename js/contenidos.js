//Cambiar contenido a elementos unicos 

const caja=document.getElementById('caja-unica');
const titulo=document.querySelector('#manipulacion');

caja.innerText="cambio en el texto #1 con innerText"

caja.innerHTML="cambio en el texto #2 con innerHTML"

caja.textContent="cambio en el texto #3 con textContent"

titulo.textContent="Manipulacion de Estilos CSS y Clases"


//Cambiar contenidos a elementos multiples

const cajas=document.querySelectorAll('.caja-contenidos');

cajas.forEach((caja, index)=>{
    caja.textContent='Caja Multiple Número ' + index;
    caja.style.color='purple';
    caja.style.fontSize='30px';
    caja.style.textAlign='right';
});