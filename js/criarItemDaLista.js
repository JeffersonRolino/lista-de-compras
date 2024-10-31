import { excluirItem } from "./excluirItem.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

export function criarItemDaLista(item) {
  /******************************************************************************
   * Item Container
   ******************************************************************************/
  const itemContainer = document.createElement("li");
  itemContainer.classList.add("item-container");

  /******************************************************************************
   * Nome Container
   ******************************************************************************/

  const nomeContainer = document.createElement("div");
  nomeContainer.classList.add("nome-container");

  /******************************************************************************
   * Checkbox
   ******************************************************************************/
  //INPUT
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("checkbox-input");
  checkboxInput.id = "checkbox-" + contador++;

  //LABEL
  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", checkboxInput.id);

  checkboxLabel.addEventListener("click", (evento) => {
    const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
    const checkboxCustomizado = evento.currentTarget.querySelector(
      ".checkbox-customizado"
    );
    const itemTitulo = evento.currentTarget
      .closest("li")
      .querySelector("#item-titulo");

    if (checkboxInput.checked) {
      checkboxCustomizado.classList.add("checked");
      itemTitulo.style.textDecoration = "line-through";
      listaComprados.appendChild(itemContainer);
    } else {
      checkboxCustomizado.classList.remove("checked");
      itemTitulo.style.textDecoration = "none";
      listaDeCompras.appendChild(itemContainer);
    }
  });

  //CHECKBOX CUSTOMIZADO
  const checkboxCustomizado = document.createElement("div");
  checkboxCustomizado.classList.add("checkbox-customizado");

  //APPEND INPUT & CHECKBOX NO LABEL
  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkboxCustomizado);

  //NOME
  const nome = document.createElement("p");
  nome.id = "item-titulo";
  nome.innerText = item;

  //APPEND LABEL & NOME NO NOME CONTAINER
  nomeContainer.appendChild(checkboxLabel);
  nomeContainer.appendChild(nome);

  /******************************************************************************
   * BOTÕES
   ******************************************************************************/
  const botoesContainer = document.createElement("div");

  //////////////////////////////////////////////////////////
  // Botão Remover
  //////////////////////////////////////////////////////////
  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao");

  const imagemRemover = document.createElement("img");
  imagemRemover.src = "img/delete.svg";
  imagemRemover.alt = "Remover";

  botaoRemover.addEventListener("click", () => {
    excluirItem(itemContainer);
  });

  botaoRemover.appendChild(imagemRemover);

  //////////////////////////////////////////////////////////
  // Botão Editar
  //////////////////////////////////////////////////////////
  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("botao");

  const imagemEditar = document.createElement("img");
  imagemEditar.src = "img/edit.svg";
  imagemEditar.alt = "Editar";

  botaoEditar.appendChild(imagemEditar);

  botoesContainer.appendChild(botaoRemover);
  botoesContainer.appendChild(botaoEditar);

  itemContainer.appendChild(nomeContainer);
  itemContainer.appendChild(botoesContainer);

  const itemData = document.createElement("p");
  itemData.classList.add("data-texto");
  itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString(
    "pt-BR",
    { hour: "numeric", minute: "numeric" }
  )}`;

  itemContainer.appendChild(itemData);

  return itemContainer;
}
