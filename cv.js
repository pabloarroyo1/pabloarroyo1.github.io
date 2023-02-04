let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', toggleText);


function toggleText() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'Leer menos'
  }
  else {
    readMore_btn.innerHTML = 'Leer más'
  }
}


function datosBasicos() {
  document.getElementById("click-basicos").style.background = "#04AA6D"
  document.getElementById("click-educacion").style.background = "#333"
  document.getElementById("click-curso").style.background = "#333"
  document.getElementById("click-experiencia").style.background = "#333"
  document.getElementById("educacion").style.display = "none"
  document.getElementById("experiencia").style.display = "none"
  document.getElementById("curso").style.display = "none"
  document.getElementById("basicos").style.display = "block"  
}

function experiencia() {
  document.getElementById("click-basicos").style.background = "#333"
  document.getElementById("click-educacion").style.background = "#333"
  document.getElementById("click-curso").style.background = "#333"
  document.getElementById("click-experiencia").style.background = "#04AA6D"

  document.getElementById("basicos").style.display = "none"
  document.getElementById("curso").style.display = "none"
  document.getElementById("educacion").style.display = "none"
  document.getElementById("experiencia").style.display = "block"
  
}

function educacion() {
  document.getElementById("click-basicos").style.background = "#333"
  document.getElementById("click-educacion").style.background = "#04AA6D"
  document.getElementById("click-curso").style.background = "#333"
  document.getElementById("click-experiencia").style.background = "#333"

  document.getElementById("educacion").style.display = "block"
  document.getElementById("curso").style.display = "none"
  document.getElementById("basicos").style.display = "none"
  document.getElementById("experiencia").style.display = "none"
}

function curso() {
  document.getElementById("click-basicos").style.background = "#333"
  document.getElementById("click-educacion").style.background = "#333"
  document.getElementById("click-curso").style.background = "#04AA6D"
  document.getElementById("click-experiencia").style.background = "#333"
  
  document.getElementById("curso").style.display = "block"
  document.getElementById("basicos").style.display = "none"
  document.getElementById("experiencia").style.display = "none"
  document.getElementById("educacion").style.display = "none"
}





