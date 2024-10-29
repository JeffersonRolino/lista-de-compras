const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

function adicionarItem(event) {
  event.preventDefault();

  const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("item-lista-container");

  const containerNomeDoItem = document.createElement("div");
  const nomeDoItem = document.createElement("p");
  nomeDoItem.innerText = item.value;
  containerNomeDoItem.appendChild(nomeDoItem);

  //Container Botões
  const containerBotoes = document.createElement("div");

  //Botão Remover
  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-acao");

  const imagemRemover = document.createElement("img");
  imagemRemover.src = "img/delete.svg";
  imagemRemover.alt = "Remover";

  botaoRemover.appendChild(imagemRemover);

  //Botão Editar
  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("botao-acao");

  const imagemEditar = document.createElement("img");
  imagemEditar.src = "img/edit.svg";
  imagemEditar.alt = "Editar";

  botaoEditar.appendChild(imagemEditar);

  containerBotoes.appendChild(botaoRemover);
  containerBotoes.appendChild(botaoEditar);

  containerItemLista.appendChild(containerNomeDoItem);
  containerItemLista.appendChild(containerBotoes);

  itemDaLista.appendChild(containerItemLista);
  listaDeCompras.appendChild(itemDaLista);
}

botaoSalvarItem.addEventListener("click", adicionarItem);
