import { confirmCancel } from "./confirm-cancel"

export function finalization(){
  const progressBar = document.querySelector("#center-bar")
  progressBar.classList.remove("Mid")
  progressBar.classList.add("End")

  const textTwo = document.querySelector("#text-two")
  const numTwo = document.querySelector("#num-two")
  numTwo.classList.remove("box-shadow")
  numTwo.classList.remove("scale")
  textTwo.classList.remove("scale")
  numTwo.style.outline = ".4rem solid #F9F6FC"

  const numThree = document.querySelector("#num-three")
  numThree.classList.add("active-background")
  numThree.classList.add("box-shadow")
  const textThree = document.querySelector("#text-three")
  textThree.classList.add("active-color")

  numThree.classList.add("scale")
  textThree.classList.add("scale")

  const benefitsDiv = document.querySelector(".benefitsDiv")
  benefitsDiv.remove()

  const localMain = document.querySelector("#localMain")
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
      <label for="terms">Ao concluir este cancelamento, você declara ciência e concordância com os pontos acima, nos termos do contrato de serviços digitais da Engplay</label>
    </div>
      
    <button disabled id="btnFinalizar">Finalizar</button>
  `
  localMain.appendChild(finalizationDiv)

  const btnFinalizar = document.querySelector("#btnFinalizar")
  const terms = document.querySelector("#terms")
  terms.addEventListener("click", ()=>{
    if(terms.checked){
      btnFinalizar.disabled = false
    } else {
      btnFinalizar.disabled = true
    }
  })

  btnFinalizar.addEventListener("click", confirmCancel)
}