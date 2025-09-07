import { keepSubs } from "./bntKeepSub"
import { privilege } from "./privilege"

export function confirmCancel(){
  const confirmModal = document.createElement("dialog")
  confirmModal.classList.add("confirmModal")
  const confirmDiv = document.createElement("div")
  confirmDiv.classList.add("confirmDiv")
  confirmDiv.innerHTML = `
    <h1>CANCELAMENTO DE ASSINATURA</h1>
    <p>Para conseguirmos cancelar apropriadamente, Confirme sua identidade:</p>
    <hr>
    <div>
      <label for="email">E-mail de cadastro:</label>
      <input type="text" id="email">
    </div>
    <div>
      <label for="password">Senha:</label>
      <div class="position">
        <input type="text" id="password">
        <span class="passwordBtn"></span>
      </div>
    </div>
    <div class="btnConfirms">
      <button class="manterBntConfirm keepSub">Manter assinatura</button>
      <button class="continueBntConfirm" id="btnPrivilege">Cancelar assinatura</button>
    </div>
  `
  const localMain = document.querySelector("#localMain")
  confirmModal.append(confirmDiv)
  localMain.appendChild(confirmModal)
  keepSubs()

  const nav = document.querySelector("#nav")
  const content = document.querySelector("#content")
  nav.classList.add("blur")
  content.classList.add("blur")

  confirmModal.showModal()
  confirmModal.addEventListener("close", () => {
    nav.classList.remove("blur")
    content.classList.remove("blur")
    confirmModal.remove()
  })

  const email = document.querySelector("#email")
  email.value = "demo@memberkit.com.br"
  const password = document.querySelector("#password")
  let formatPassword = "************"
  let realPassword = "memberkit123"
  password.value = formatPassword

  password.addEventListener("input", (event)=> {
    const pos = event.target.selectionStart;
    let last = password.value.slice(-1)
    if(password.value.length == realPassword.length + 1){
      realPassword += last
    } else if (password.value.length == realPassword.length - 1){
      realPassword = realPassword.slice(0, pos) + realPassword.slice(pos + 1)
    }
    else {
      realPassword = realPassword.slice(0, -(realPassword.length - password.value.length))
    }
    formatPassword = password.value
    formatPassword = password.value.replace(/./g, "*")
    password.value = formatPassword
  })

  const showPassword = document.querySelector(".passwordBtn")
  showPassword.addEventListener("click", () => {
    if(password.value == formatPassword) {
      password.value = realPassword
    } else {
      password.value = formatPassword
    }
  })

  const btnPrivilege = document.querySelector("#btnPrivilege")
  btnPrivilege.addEventListener("click", privilege)
}