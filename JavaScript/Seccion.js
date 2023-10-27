    const seccion2 = document.getElementById("seccion-dos");
    const seccion3 = document.getElementById("seccion-tres");
    
  function ocultarSecciones() {
    seccion2.style.display = "none";
    seccion3.style.display = "none";
  }

  function mostrarSeccion2(){
    seccion2.style.display="flex"
  }

  function mostrarSeccion3(){
    seccion3.style.display = "flex";
  }

  window.addEventListener("load", ocultarSecciones());
