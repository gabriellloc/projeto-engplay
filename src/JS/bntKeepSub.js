import { reception } from "./reception"

export function keepSubs(){
  const keepSub = document.querySelectorAll(".keepSub")
  keepSub.forEach((bnt => {
    bnt.addEventListener("click", () => {
      const body = document.querySelector("body")
      body.innerHTML = `<div class="nav" id="nav">
        <section>
            <img src="assets/icons/Menu.svg" alt="Botão de menu" id="bntMenu">
            <img src="assets/icons/logo (ENGPLAY).svg" alt="Logo da Engplay">
        </section>
        <section>
            <img src="assets/icons/notification.svg" alt="Botão de notificação">
            <img src="assets/icons/profile.svg" alt="Botão para acessar o perfil">
        </section>
    </div>

    <main class="content" id="content">
        <section class="main-l">
            <div class="dad">
                <a href="" class="childs">
                    <img src="assets/icons/home-outline.svg">
                    <h2 class="contentsOn">Conteúdos</h2>
                </a>

                <a href="" class="childs">
                    <img src="assets/icons/classes.svg">
                    <h2 class="contentsOn">Turmas</h2>
                </a>

                <a href="" class="childs">
                    <img src="assets/icons/certificates.svg">
                    <h2 class="contentsOn">Certificados</h2>
                </a>

                <a href="" class="childs">
                    <img src="assets/icons/image-outline.svg">
                    <h2 class="contentsOn">Banners</h2>
                </a>

                <a href="" class="childs">
                    <img src="assets/icons/folder-outline.svg">
                    <h2 class="contentsOn">Assinaturas</h2>
                </a>

                <a href="" class="childs">
                    <img src="assets/icons/person-add.svg">
                    <h2 class="contentsOn">Convites</h2>
                </a>

                <a href="" class="childs">
                    <img src="assets/icons/people-invite.svg">
                    <h2 class="contentsOn">Membros</h2>
                </a>

                <a href="" class="childs">
                    <img src="assets/icons/comments.svg">
                    <h2 class="contentsOn">Comentários</h2>
                </a>

                <a href="" class="childs">
                    <img src="assets/icons/community.svg">
                    <h2 class="contentsOn">Comunidades</h2>
                </a>

                <a href="" class="childs">
                    <img src="assets/icons/ranking.svg">
                    <h2 class="contentsOn">Rankings</h2>
                </a>

                <a href="" class="childs">
                    <img src="assets/icons/bag.svg">
                    <h2 class="contentsOn">Ofertas</h2>
                </a>                  
            </div>
        </section>

        <section class="main-r" id="mainContent">
            <div class="charge">
                <section>
                    <p>Memberkit Academy</p>
                    <h2>Cobrança</h2>
                </section>

                <section>
                    <div>
                        <h3>Assinatura</h3>
                        <p>Ao cancelar sua assinatura, todos os dados poderão ser removidos no prazo de 90 dias.</p>
                    </div>
                    <div class="stats">
                        <p class="activation" id="activation">Ativa</p>
                        <button id="cancel">Cancelar</button>
                    </div>
                </section>
            </div>
        </section>
      </main>`
      const btnCancel = document.querySelector("#cancel")
      btnCancel.addEventListener("click", cancel)
      
      function cancel(){
        nav.classList.add("blur")
        content.classList.add("blur")
      
        reception()
      }
    })
  }))
}