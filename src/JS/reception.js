/*
  Etapa de acolhimento e recepção do usuário

  --Etapa 01--
*/

// Importação do botão de manter assinatura e da próxima etapa
import { keepSubs } from "./bntKeepSub"
import { feedback } from "./feedback"

// Pegando o body
const body = document.querySelector("body")

/* 
  Definindo o nome do Usuário.
  Necessário somente para desenvolvimento. (testar com outros nomes.)
*/

let userName = "Isadora"

// Função de recepção
export function reception(){
  // Criando um modal e adicionando sua class
  const receptionModal = document.createElement("dialog")
  receptionModal.classList.add("receptionModal")

  // Criando uma div com o conteúdo do modal e sua class
  const receptionDiv = document.createElement("div")
  receptionDiv.classList.add("receptionDiv")

  // Atribuindo o conteúdo da div
  receptionDiv.innerHTML = `
    <img src="assets/icons/logo (ENGPLAY).svg" alt="Logo" class="logo">
    <img src="assets/icons/coracao.svg" alt="Coração" class="heart">
    <h1 class="byeTitle">Sentiremos sua falta, <span class="capitalize">${userName}</span>!!</h1>
    <p class="byeText">Respeitamos totalmente sua decisão de encerar sua assinatura. Porém caso haja algo que possamos fazer para melhorar sua experiência, queremos ouvi-lo antes de nos despedirmos.</p>
    <div>
      <button class="manterAss keepSub">Manter Assinatura</button>
      <button class="continueBnt" id="bntFeedback">Continuar</button>
    </div>
  `

  // Adicionando a div no modal
  receptionModal.append(receptionDiv)
  // Adicionando o modal no body
  body.appendChild(receptionModal)
  // Mostrando o modal na tela
  receptionModal.showModal()

  // Criando o evento quando o modal for fechado
  receptionModal.addEventListener("close", ()=>{
    // Remove os efeitos e remove o modal da tela
    nav.classList.remove("blur")
    content.classList.remove("blur")
    receptionModal.remove()
  })

  // Obtendo o botão de manter assinatura
  keepSubs()

  // Pegando o botão de continuar para seguir o cancelamento
  const bntFeedback = document.querySelectorAll("#bntFeedback")
  bntFeedback.forEach(bnt => {
    bnt.addEventListener("click", () => {
      // Executando o feedback
      feedback()

      // Fechando o modal
      receptionModal.close()
    })
  })
}