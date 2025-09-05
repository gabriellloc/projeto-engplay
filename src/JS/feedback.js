import { keepSubs } from "./bntKeepSub"

export function feedback(){
  const mainContent = document.querySelector("#mainContent")
  mainContent.innerHTML = ""
  const progressBarHTML = document.createElement("div")
  progressBarHTML.innerHTML = `
    <section class="progress-bar">
      <div class="bar-stage">
        <div class="number-bar active-background">1</div>
        <label class="text-bar active-color">FEEDBACK</label>
      </div>

      <div class="bar-stage center-bar">
        <div class="number-bar">2</div>
        <label class="text-bar">BENEFÍCIOS</label>
      </div>

      <div class="bar-stage">
        <div class="number-bar">3</div>
        <label class="text-bar">FINALIZAÇÃO</label>
      </div>
    </section>
  `

  const feedbackForm = document.createElement("form")
  feedbackForm.innerHTML = `
    <h1>Podemos ouvir você rapidinho ?</h1>
    <hr>
    <p>Entender seu motivo nos ajuda a evoluir. É rápido, basta escolher uma opção abaixo</p>
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

    <div class="divBnt">
      <button class="manterAss keepSub">Manter Assinatura</button>
      <button class="continueBnt" id="">Continuar</button>
    </div>
  `
  feedbackForm.addEventListener("submit", (event)=> {
    event.preventDefault()
  })
  mainContent.append(progressBarHTML, feedbackForm)
  keepSubs()
}