export function privilege(){
  const confirmDiv = document.querySelector(".confirmDiv")
  confirmDiv.remove()

  const confirmModal = document.querySelector(".confirmModal")
  const privilegeDiv = document.createElement("div")
  privilegeDiv.classList.add("privilegeDiv")
  privilegeDiv.innerHTML = `
    <img src="assets/icons/logo (ENGPLAY).svg" alt="Logo" class="logo">
    <h1 class="byeTitle">Foi um privilégio ter você com a gente</h1>
    <p class="byeText">Guardaremos o que você construiu aqui com carinho. Volte quando sentir que é o momento certo.</p>
    <button id="exitPrivilege">Fechar</button>
  `
  confirmModal.append(privilegeDiv)

  const exitPrivilege = document.querySelector("#exitPrivilege")
  exitPrivilege.addEventListener("click", () => {
    confirmModal.close()

    const mainContent = document.querySelector("#mainContent")
    mainContent.innerHTML = `
      <div class="charge">
          <section>
              <p>Memberkit Academy</p>
              <h2>Cobrança</h2>
          </section>

          <section>
              <div>
                  <h3>Assinatura</h3>
                  <p>Você não possui uma assinatura ativa no momento. Os dados relacionados serão mantidos por até 90 dias antes da remoção</p>
              </div>
              <div class="stats">
                  <button id="cancel">Ativar</button>
              </div>
          </section>
      </div>
    `
  })
}