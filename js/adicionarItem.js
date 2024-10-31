import { criarItemDaLista } from "./criarItemDaLista.js";

const item = document.getElementById("input-item");
const listaContainer = document.getElementById("lista-container");

export function adicionarItem(event) {
  event.preventDefault();

  const itemDaLista = criarItemDaLista(item.value);
  listaContainer.appendChild(itemDaLista);
}
