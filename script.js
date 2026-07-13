const carta = `

Danita...

(Aquí irá la carta completa que escribimos juntos ❤️)

`;

function abrirCarta(){

document.getElementById("inicio").style.display="none";

document.getElementById("papel").style.display="flex";

const texto=document.getElementById("texto");

texto.innerHTML="";

let i=0;

function escribir(){

if(i<carta.length){

texto.innerHTML+=carta.charAt(i);

i++;

setTimeout(escribir,28);

}

}

escribir();

}
