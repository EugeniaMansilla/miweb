
window.onload = iniciar;

function iniciar () {
  document.getElementById("btnComentar").addEventListener("click", AgregarComentario)
  document.getElementById("btnMeGusta").addEventListener("click", Likes)
  document.getElementById("btnSeguir").addEventListener("click", DejarSeguir)
  
}
function DejarSeguir() {

  let indicacion = document.getElementById("btnSeguir").innerText;
  
  if(indicacion == "Seguir"){
    document.getElementById("btnSeguir").innerHTML = "Dejar de Seguir"
  }
  else{
    document.getElementById("btnSeguir").innerHTML = "Seguir"
  }
}

function Likes () {
  let num = document.getElementById("likes").innerText;
  let conteo = Number(num) + 1;
  document.getElementById("likes").innerHTML = conteo;

}


function AgregarComentario(evento) {
    evento.preventDefault();
   
    let comentario = document.getElementById("txtComentario").value;
    let usuario = document.getElementById('txtUsuario').value;

    if (comentario === ''|| usuario === '') {
      alert("mal")
      return;
    }
    let text = document.createTextNode (usuario + " " + comentario);

    let lista = document.createElement('p');
    lista.appendChild(text);

    document.getElementById('listado').appendChild(lista);
    document.getElementById("txtComentario").value= " ";
}





