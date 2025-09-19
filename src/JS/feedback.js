/*
  Etapa de obter o motivo do cancelamento do usuário

  --Etapa 02--
*/

// Importação do botão de manter assinatura e da próxima etapa
import { benefits } from "./benefits"
import { keepSubs } from "./bntKeepSub"

export function feedback(){
  // Obtendo o local que vai ficar o conteúdo e deixando ele vazio
  const mainContent = document.querySelector("#mainContent")
  mainContent.innerHTML = ""

  // Criando o local que vai ficar a barra de progresso e o conteúdo da etapa
  const localMain = document.createElement("div")
  localMain.setAttribute("id", "localMain")

  // Criando a barra de progresso e seu conteúdo
  const progressBarHTML = document.createElement("div")
  progressBarHTML.innerHTML = `
    <section class="progress-bar">
      <div class="bar-stage">
        <div class="number-bar active-background" id="num-one">1</div>
        <label class="text-bar active-color" id="text-one">FEEDBACK</label>
      </div>

      <div class="bar-stage center-bar" id="center-bar">
        <div class="number-bar" id="num-two">2</div>
        <label class="text-bar" id="text-two">BENEFÍCIOS</label>
      </div>

      <div class="bar-stage">
        <div class="number-bar" id="num-three">3</div>
        <label class="text-bar" id="text-three">FINALIZAÇÃO</label>
      </div>
    </section>
  `

  // Criando o elemento form para obter as informações do motivo do cancelamento.
  const feedbackForm = document.createElement("form")
  feedbackForm.innerHTML = `
    <h1>Podemos ouvir você rapidinho ?</h1>
    <hr>
    <p>Entender seu motivo nos ajuda a evoluir. É rápido, basta escolher uma opção abaixo.</p>
    <div>
    <section class="formOptions">
      <div>
        <input type="radio" name="feedback" id="dificuldades">
        <label for="dificuldades">Dificuldades com o suporte ao cliente.</label>
      </div>

      <div>
        <input type="radio" name="feedback" id="noTime" value="noTime">
        <label for="noTime">Falta de tempo.</label>
      </div>

      <div>
        <input type="radio" name="feedback" id="financial" value="financial">
        <label for="financial">Questões financeira.</label>
      </div>

      <div>
        <input type="radio" name="feedback" id="needs" value="needs">
        <label for="needs">Conteúdo não atendeu às minhas necessidades.</label>
      </div>

      <div>
        <input type="radio" name="feedback" id="objective">
        <label for="objective">Já atingi o meu objetivo.</label>
      </div>

      <div>
        <label for="Other">Outro motivo:</label>
        <input type="text" id="Other" value="">
      </div>
    </section>

    <div class="divBnt">
      <button class="manterAss keepSub">Manter Assinatura</button>
      <button class="continueBnt" type="submit">Continuar</button>
    </div>
  `

  // Adicionando a barra de progresso e o form no localMain
  localMain.append(progressBarHTML, feedbackForm)

  // Colocando o localMain na página
  mainContent.append(localMain)

  // Colocando a estilização de destaque na primeira etapa
  const numOne = document.querySelector("#num-one")
  const textOne = document.querySelector("#text-one")
  numOne.classList.add("box-shadow")
  numOne.classList.add("scale")
  textOne.classList.add("scale")

  // Fazendo o formulário "conversar" entre as opções
  const inputValueText = document.querySelector("#Other")
  
  // Variável que vai armazenar o valor do input
  let textValue = ""
  inputValueText.addEventListener("input", () => {
    // Obtendo somente o input marcado.
    const inputValue = document.querySelector("input[name='feedback']:checked");
    textValue = inputValueText.value
    
    // Desmarca caso o usuário tenha marcado um radio
    if (inputValue != null){
        inputValue.checked = false
    }
  })

  // Obtendo todos os inputRadios
  const inputRadios = document.querySelectorAll("input[name='feedback']");
  // Percorrendo e zerando caso o usuário tenha colocado conteúdo no input text e em seguida marcado um input
  inputRadios.forEach(inp => {
    inp.addEventListener("click", () => {
      inputValueText.value = ""
      textValue = ""
    })
  })

  // Atribuindo o evento de submit no form
  feedbackForm.addEventListener("submit", (event)=> {
    // Removendo a função de reload padrão do navegador
    event.preventDefault()

    // Obtendo o inputRadio marcado
    const inputValue = document.querySelector("input[name='feedback']:checked");

    // Condição que verifica se tem algum inputRadio marcado ou se o usuário digitou algo no inputText
    if(textValue == "" && inputValue === null){
      // Caso ele nao tenha marcado nada, retorna um alert na tela
      return alert("Preencha os dados.")
    }


    // Criando a parte de ofertas
    const offers = document.createElement("dialog")
    // Estilização
    offers.classList.add("offers")
    
    // Executa a próxima etapa
    if(inputValue.value == "needs"){
      const divNeeds = document.createElement("div")
      divNeeds.classList.add("divTimeOut")
      divNeeds.innerHTML = `
        <h3>Trilha recomendada baseada no seu histórico + 10% ou mais de desconto</h3>
        <p class="imgsNeeds">
          <img src="assets/imgs/ENGPLAY_CAPACURSO_REVIT_1-1 1.png" alt="">
          <img src="assets/imgs/ENGPLAY_CAPACURSO_COMBATEINCENDIO 1.png" alt="">
          <img src="assets/imgs/ENGPLAY_CAPACURSO_COMBATEINCENDIO_DO_PROJETO_A_APROVACAO 2.png" alt="">
          <img src="assets/imgs/ENGPLAY_CAPA-CRIANDO-PORTIFOLIOS.png" alt="">
        </p>
        <div class="flex">
          <button class="acceptOffer keepSub" id="acceptOfferBnt">Aceitar</button>
          <button class="recuseOffer" id="recuseOfferBnt">Recusar</button>
        </div>
      `
      offers.append(divNeeds)
      document.body.append(offers)

      const nav = document.querySelector("#nav")
      const content = document.querySelector("#content")
      nav.classList.add("blur")
      content.classList.add("blur")

      offers.showModal()

      offers.addEventListener("close", ()=> {
        nav.classList.remove("blur")
        content.classList.remove("blur")
        offers.remove()
      })

      const recuseOfferBnt = document.querySelector("#recuseOfferBnt")
      recuseOfferBnt.addEventListener("click", () => {
        offers.close()
        benefits()
      })

      const acceptOfferBnt = document.querySelector("#acceptOfferBnt")
      acceptOfferBnt.addEventListener("click", ()=>{
        offers.close()
      })

      keepSubs()
    } else if (inputValue.value == "financial"){
      const divFinancial = document.createElement("div")
      divFinancial.classList.add("divTimeOut")
      divFinancial.innerHTML = `
        <h3>Aprender não precisa pesar no bolso.</h3>
        <p>Podemos oferecer 50% OFF por 2 meses para que você continue estudando enquanto se reorganiza.</p>
        <div class="flex">
          <button class="acceptOffer keepSub" id="acceptOfferBnt">Aceitar</button>
          <button class="recuseOffer" id="recuseOfferBnt">Recusar</button>
        </div>        
      `
      offers.append(divFinancial)
      document.body.append(offers)
      
      const nav = document.querySelector("#nav")
      const content = document.querySelector("#content")
      nav.classList.add("blur")
      content.classList.add("blur")
      
      offers.showModal()
      
      offers.addEventListener("close", () => {
        nav.classList.remove("blur")
        content.classList.remove("blur")
        offers.remove()
      })
      keepSubs()

      const recuseOfferBnt = document.querySelector("#recuseOfferBnt")
      recuseOfferBnt.addEventListener("click", () => {
        offers.close()
        benefits()
      })
    } else {
      benefits()
    }
  })

  // Obtendo o botão de manter assinatura
  keepSubs()
}