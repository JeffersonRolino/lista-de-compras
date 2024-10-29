const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaContainer = document.getElementById("lista-container");
let contador = 0;

function adicionarItem(event) {
  event.preventDefault();

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

    if (checkboxInput.checked) {
      checkboxCustomizado.classList.add("checked");
    } else {
      checkboxCustomizado.classList.remove("checked");
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
  nome.innerText = item.value;

  //APPEND LABEL & NOME NO NOME CONTAINER
  nomeContainer.appendChild(checkboxLabel);
  nomeContainer.appendChild(nome);

  //Container Botões
  const botoesContainer = document.createElement("div");

  //Botão Remover
  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao");

  const imagemRemover = document.createElement("img");
  imagemRemover.src = "img/delete.svg";
  imagemRemover.alt = "Remover";

  botaoRemover.appendChild(imagemRemover);

  //Botão Editar
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

  listaContainer.appendChild(itemContainer);
}

botaoSalvarItem.addEventListener("click", adicionarItem);
