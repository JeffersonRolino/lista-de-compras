const compradosContainer = document.querySelector(".comprados-container");

export function verificarListaComprados(lista) {
  if (lista.childElementCount === 0) {
    compradosContainer.style.display = "none";
  } else {
    compradosContainer.style.display = "block";
  }
}
