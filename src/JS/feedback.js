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
  `
  mainContent.append(progressBarHTML, feedbackForm)
}