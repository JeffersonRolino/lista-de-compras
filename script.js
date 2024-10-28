const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");

function adicionarItem(event) {
  event.preventDefault();
  console.log("Item adicionado");
}

botaoSalvarItem.addEventListener("click", adicionarItem);
