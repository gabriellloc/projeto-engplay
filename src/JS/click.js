/*
  Etapa que recebe o clique do botão de cancelar.

  ---Etapa 00---
*/

// Importação da próxima etapa
import { reception } from "./reception.js"

// Obtendo as variáveis
const nav = document.querySelector("#nav")
const content = document.querySelector("#content")
const btnCancel = document.querySelector("#cancel")

// Adicionando o evento de clique no botão de cancelar
btnCancel.addEventListener("click", cancel)

// A função de cancelar
function cancel(){
  // Aplicando os efeitos no content e no nav
  nav.classList.add("blur")
  content.classList.add("blur")

  // Executando a próxima etapa
  reception()
}