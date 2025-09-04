const body = document.querySelector("body")
let userName = "Isadora"

export function reception(){
  const receptionModal = document.createElement("dialog")
  receptionModal.classList.add("receptionModal")

  const receptionDiv = document.createElement("div")
  receptionDiv.classList.add("receptionDiv")

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
  
  receptionModal.append(receptionDiv)
  body.appendChild(receptionModal)
  receptionModal.showModal()
}