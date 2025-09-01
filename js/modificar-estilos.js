//Manipulacion d4e estilos de un elemento unico
const estilo=document.getElementById('estilo-unico');

//Canbiar estilos a elementos multples teniendo encuenta su contenedor padre #estilos 
const estilos=document.querySelectorAll('#estilos .caja');

estilo.style.background="black";
estilo.style.color="purple";
estilo.style.fontSize="25px";
estilo.style.textAlign="center";

//  Manipulacion de clases 
estilos.forEach((caja, index) => {
    caja.style.border="2px solid purple";
});

estilo.classList.add("Active");