window.addEventListener("load", ocultarBotones());
window.addEventListener("load", cerrarModal())

function ocultarBotones() {
    var botones = document.querySelectorAll(".link");
    for (var i = 0; i < botones.length; i++) {
      botones[i].style.display = "none";
    }
}

function ocultarVerMas(){
    var verMas = document.querySelector(".verMas");
    if (verMas) {
     verMas.remove();
    }
    
}

function mostrarBotones(){
    var botones = document.querySelectorAll(".link");
    for (var i = 0; i < botones.length; i++) {
      botones[i].style.display = "flex";
    }
}



  function mostrarModal() {
    
    var modal = document.getElementById("miModal");
    modal.style.display = "block";
  }

 
  function aceptarAccion() {
    mostrarBotones();
    mostrarSeccion2();
    mostrarSeccion3();
    cerrarModal();
    ocultarVerMas();
  }

 
  function cancelarAccion() {
    cerrarModal();
  }

  function cerrarModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
    
  }


