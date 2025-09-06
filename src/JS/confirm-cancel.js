export function confirmCancel(){
  const confirmModal = document.createElement("dialog")
  const confirmDiv = document.createElement("div")
  confirmDiv.innerHTML = `
    <h1>CANCELAMENTO DE ASSINATURA</h1>
    <p>Para conseguirmos cancelar apropriadamente, Confirme sua identidade:</p>
    <hr>
    <div>
      <label for="">E-mail de cadastro:</label>
      <input type="text">
    </div>
    <div>
      <label for="">Senha:</label>
      <input type="text">
    </div>
  `
  const body = document.querySelector("body")
  confirmModal.append(confirmDiv)
  body.appendChild(confirmModal)
  confirmModal.showModal()
}