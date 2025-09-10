/*
  Etapa de finalização, aqui são exibidos os detalhes do cancelamento

  --Etapa 04--
*/

// Importação da próxima etapa
import { confirmCancel } from "./confirm-cancel"

export function finalization(){
  // Obtendo o elemento responsável pela animação da barra de progresso
  const progressBar = document.querySelector("#center-bar")
  progressBar.classList.remove("Mid")
  // Atribuindo a class "End" para a barra de progresso ir para a ultima etapa
  progressBar.classList.add("End")

  // Removendo a formatação da segunda etapa em destaque
  const textTwo = document.querySelector("#text-two")
  const numTwo = document.querySelector("#num-two")
  numTwo.classList.remove("box-shadow")
  numTwo.classList.remove("scale")
  textTwo.classList.remove("scale")
  numTwo.style.outline = ".4rem solid #F9F6FC"

  // Colocando a formatação em destaque na terceira etapa
  const numThree = document.querySelector("#num-three")
  numThree.classList.add("active-background")
  numThree.classList.add("box-shadow")
  const textThree = document.querySelector("#text-three")
  textThree.classList.add("active-color")
  numThree.classList.add("scale")
  textThree.classList.add("scale")

  // Pegando a div benefitsDiv e removendo
  const benefitsDiv = document.querySelector(".benefitsDiv")
  benefitsDiv.remove()

  // Obtendo o localMain
  const localMain = document.querySelector("#localMain")

  // Criando a div finalizationDiv, atribuindo sua class e seu conteúdo
  const finalizationDiv = document.createElement("div")
  finalizationDiv.classList.add("finalizationDiv")
  finalizationDiv.innerHTML = `
    <h1>Detalhes do seu Cancelamento</h1>
    <hr>
    <p>Sua assinatura mensal está sendo encerrada com sucesso</p>
    <section class="detailsList">
      <p>A partir de um clique:</p>
      <ul>
        <li>Não receberá mais cobranças em sua fatura;</li>
        <li>Seu acesso aos cursos e trilhas continua ativo até o fim do período atual;</li>
        <li>Após esse prazo, não será mais possível acessar aulas, materiais, comunidade e banco de vagas;</li>
        <li>Todo o seu histórico de progresso continuará por 1 mês.</li>
      </ul>
    </section>

    <span>Conforme os termos de uso da plataforma, ficam estabelecidos os seguintes pontos: Encerramento da cobrança, Direito de acesso e Preservação de dados por 1 mês.</span>

    <div class="termsDiv">
      <input type="checkbox" id="terms">
      <label for="terms"></label>
    </div>
      
    <button disabled id="btnFinalizar">Finalizar</button>
  `

  // Adicionado a div finalizationDiv no localMain
  localMain.appendChild(finalizationDiv)

  // Obtendo o botão da próxima etapa
  const btnFinalizar = document.querySelector("#btnFinalizar")

  // Obtendo o input dos termos
  const terms = document.querySelector("#terms")
  // Atribuindo um evento que verifica se o input esta marcado para habilitar ou desabilitar o botão da próxima etapa
  terms.addEventListener("click", ()=>{
    if(terms.checked){
      btnFinalizar.disabled = false
    } else {
      btnFinalizar.disabled = true
    }
  })

  // Atribuindo um evento de clique no botão para seguir para a próxima etapa
  btnFinalizar.addEventListener("click", confirmCancel)
}