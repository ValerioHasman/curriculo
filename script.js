/** @param {HTMLTextAreaElement} areaDeTexto */
function redimensionarTextArea(areaDeTexto) {
  areaDeTexto.rows = 1;
  const lineHeight = Number.parseInt(window.getComputedStyle(areaDeTexto).lineHeight, 10);
  const newRows = Math.trunc(areaDeTexto.scrollHeight / lineHeight);
  areaDeTexto.rows = newRows;
}

function EscreveOObjetivo(){
  objetivo.innerText = textarea.value;
}