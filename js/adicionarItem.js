import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(event) {
  event.preventDefault();

  if (item.value === "") {
    alert("Por favor insira um item!");
    return;
  } else {
    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    item.value = "";
  }
}
