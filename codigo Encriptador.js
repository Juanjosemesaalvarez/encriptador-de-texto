function botonEncriptar(){
let textarea =document.querySelector("textarea").value;
let tituloMensaje =document.getElementById("titulo-mensaje");
let parrafo=document.getElementById("parrafo");
let dibujo =document.getElementById("dibujo");


let textocifrado=textarea
                   .replace(/e/gi,"enter")
                   .replace(/i/gi,"imes")
                   .replace(/a/gi,"ai")
                   .replace(/o/gi,"ober")
                   .replace(/u/gi,"ufat");

if(textarea.length !=0){
  textarea=textocifrado;
  document.getElementById("titulo-mensaje").textContent ="texto encriptado con éxito";
parrafo.textContent="";
 muñeco.src="./img/muñeco.png";

}
else{
  muñeco.src="./img/diamod.png";
  alert ="debes ingresar algún texto";
}

}   


