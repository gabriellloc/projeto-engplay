/*
  Etapa de obter o motivo do cancelamento do usuário

  --Etapa 02--
*/


import { benefits } from "./benefits"
import { keepSubs } from "./bntKeepSub"

export function feedback(){
  const mainContent = document.querySelector("#mainContent")
  mainContent.innerHTML = ""
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
  const localMain = document.createElement("div")
  localMain.setAttribute("id", "localMain")
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
  localMain.append(progressBarHTML, feedbackForm)
  mainContent.append(localMain)

  const numOne = document.querySelector("#num-one")
  const textOne = document.querySelector("#text-one")
  numOne.classList.add("box-shadow")
  
  numOne.classList.add("scale")
  textOne.classList.add("scale")

  const inputValueText = document.querySelector("#Other")
  let textValue = ""
  inputValueText.addEventListener("input", () => {
    const inputValue = document.querySelector("input[name='feedback']:checked");
    textValue = inputValueText.value
    
    // Desmarca caso o usuário tenha marcado um radio
    if (inputValue != null){
        inputValue.checked = false
    }
  })

  const inputRadios = document.querySelectorAll("input[name='feedback']");
  inputRadios.forEach(inp => {
    inp.addEventListener("click", () => {
      inputValueText.value = ""
      textValue = ""
    })
  })

  feedbackForm.addEventListener("submit", (event)=> {
    const inputValue = document.querySelector("input[name='feedback']:checked");
    event.preventDefault()
    if(textValue == "" && inputValue === null){
      return alert("Preencha os dados.")
    }

    benefits()
  })
  keepSubs()
}