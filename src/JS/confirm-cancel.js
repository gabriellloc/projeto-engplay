/*
  Etapa de confirmar os dados para cancelar, aqui será necessário que o usuário confirme os dados para efetuar o cancelamento.

  --Etapa 05--
*/

// Importação da próxima etapa e do botão de manter assinatura
import { keepSubs } from "./bntKeepSub"
import { privilege } from "./privilege"

export function confirmCancel(){
  // Cria um elemento dialog com a class "confirmModal"
  const confirmModal = document.createElement("dialog")
  confirmModal.classList.add("confirmModal")

  // Cria uma div com a class "confirmDiv" com seu conteúdo
  const confirmDiv = document.createElement("div")
  confirmDiv.classList.add("confirmDiv")
  confirmDiv.innerHTML = `
    <h1>CANCELAMENTO DE ASSINATURA</h1>
    <p>Para conseguirmos cancelar apropriadamente, Confirme sua identidade:</p>
    <hr>
    <div id="localEmail">
      <label for="email">E-mail de cadastro:</label>
      <input type="text" id="email">
    </div>
    <div id="localPassword">
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

  // Obtendo o localMain
  const localMain = document.querySelector("#localMain")
  // Colocando a div "confirmDiv" no confirmModal
  confirmModal.append(confirmDiv)

  // Adicionado o confirmModal no localMain
  localMain.appendChild(confirmModal)

  // Obtendo o botão de manter assinatura
  keepSubs()

  // Obtendo e estilizando o nav e o content com efeito de blur
  const nav = document.querySelector("#nav")
  const content = document.querySelector("#content")
  nav.classList.add("blur")
  content.classList.add("blur")

  // Mostrando o modal na tela
  confirmModal.showModal()

  // Colocando o evento de close no modal
  confirmModal.addEventListener("close", () => {
    nav.classList.remove("blur")
    content.classList.remove("blur")
    confirmModal.remove()
  })

  // Atribuindo os valores do email e da senha com a formatação
  const email = document.querySelector("#email")
  const yourEmail = "demo@memberkit.com.br"
  email.value = yourEmail
  const password = document.querySelector("#password")
  const yourPassword = "memberkit123"
  let formatPassword = "************"
  let realPassword = yourPassword
  password.value = formatPassword

  password.addEventListener("input", (event)=> {
    const pos = event.target.selectionStart - 1;
    let last = password.value.slice(-1)
    if(password.value.length == realPassword.length + 1){
      realPassword = realPassword.slice(0, pos) + last + realPassword.slice(pos)
    } else {
      realPassword = realPassword.slice(0, pos+1) + realPassword.slice(pos+1 +(realPassword.length - password.value.length))
    }
    formatPassword = password.value
    formatPassword = password.value.replace(/./g, "*")
    password.value = formatPassword
    password.setSelectionRange(pos + 1, pos + 1);
  })

  const showPassword = document.querySelector(".passwordBtn")
  showPassword.addEventListener("click", () => {
    if(password.value == formatPassword) {
      password.value = realPassword
    } else {
      password.value = formatPassword
    }
  })

  const localEmail = document.querySelector("#localEmail")
  const localPassword = document.querySelector("#localPassword")

  const emailIncorrect = document.createElement("div")
  emailIncorrect.textContent = "E-mail incorreto"
  emailIncorrect.classList.add("incorrect")

  const passwordIncorrect = document.createElement("div")
  passwordIncorrect.textContent = "Senha incorreta"
  passwordIncorrect.classList.add("incorrect")

  const btnPrivilege = document.querySelector("#btnPrivilege")
  btnPrivilege.addEventListener("click", () => {
    if (email.value != yourEmail){
      localEmail.append(emailIncorrect)
      return
    } else {
      emailIncorrect.remove()
    }

    if(realPassword != yourPassword){
      localPassword.append(passwordIncorrect)
      return
    } else {
      passwordIncorrect.remove()
    }

    privilege()
  })
}