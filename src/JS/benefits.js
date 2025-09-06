import { keepSubs } from "./bntKeepSub"
import { finalization } from "./finalization"

export function benefits(){
  const progressBar = document.querySelector("#center-bar")
  progressBar.classList.add("Mid")

  const numOne = document.querySelector("#num-one")
  const textOne = document.querySelector("#text-one")
  numOne.classList.remove("box-shadow")
  numOne.classList.remove("scale")
  textOne.classList.remove("scale")
  
  const numTwo = document.querySelector("#num-two")
  numTwo.classList.add("box-shadow")
  numTwo.classList.add("active-background")
  const textTwo = document.querySelector("#text-two")
  textTwo.classList.add("active-color")

  numTwo.classList.add("scale")
  textTwo.classList.add("scale")
  const form = document.querySelector("form")
  form.remove()

  const localMain = document.querySelector("#localMain")
  const benefitsDiv = document.createElement("div")
  benefitsDiv.classList.add("benefitsDiv")
  benefitsDiv.innerHTML = `
    <h1>Você está prestes a perder todos os seus benefícios</h1>
    <hr>
    <p>Cancelando sua inscrição hoje, você deixará de ter acesso a:</p>
    <div class="divImgs">
      <img src="assets/imgs/etp-2-leitura-e-interpretacao.png" alt="">
      <img src="assets/imgs/etp-2-instalacoes-hidrossanitarias.png" alt="">
      <img src="assets/imgs/etp-2-projeto-hidrossanitario.png" alt="">
      <img src="assets/imgs/ENGPLAY_CAPACURSO_COMBATEINCENDIO_DO_PROJETO_A_APROVACAO 2.png" alt="">
      <img src="assets/imgs/ENGPLAY_CAPA-CRIANDO-PORTIFOLIOS.png" alt="">
      <img src="assets/imgs/ENGPLAY_CAPACURSO_TCC-1.webp" alt="">
    
      <img src="assets/imgs/etp-2-leitura-e-interpretacao.png" alt="">
      <img src="assets/imgs/etp-2-instalacoes-hidrossanitarias.png" alt="">
      <img src="assets/imgs/etp-2-projeto-hidrossanitario.png" alt="">
      <img src="assets/imgs/ENGPLAY_CAPACURSO_COMBATEINCENDIO_DO_PROJETO_A_APROVACAO 2.png" alt="">
      <img src="assets/imgs/ENGPLAY_CAPA-CRIANDO-PORTIFOLIOS.png" alt="">
      <img src="assets/imgs/ENGPLAY_CAPACURSO_TCC-1.webp" alt="">
    </div>

    <table>
      <tr>
        <td class="border-bottom border-right">
          <h2>Comunidade Exclusiva para networking</h2>
          <p>Faça seu nome. Seja ativo e divulgue seus serviços e ajude para ser ajudado.</p>
        </td>
        <td class="border-left border-bottom border-right">
          <h2>Repositório de planilhas, famílias e templates</h2>
          <p>Não fique procurando ou comprando avulso. Nosso repositório agora é seu.</p>
        </td>
        <td class="border-left border-bottom">
          <h2>Banco de Vagas de emprego</h2>
          <p>Semanalmente nossa IA varre mais de 100 vagas no país inteiro.</p>
        </td>
      </tr>

      <tr>
        <td class="border-right border-top">
          <h2>Inteligência Artificial de Consulta NBR</h2>
          <p>Colhemos milhares de NBR para nossa IA te entregar detalhes e tirar as dúvidas.</p>
        </td>
        <td class="border-right border-left border-top">
          <h2>Sem limites de uso!</h2>
          <p>Assista como, onde e o quanto quiser todos os cursos da plataforma.</p>
        </td>
        <td class="border-top border-left">
          <h2>Certificado para cada curso</h2>
          <p>Seja referência. Conquiste seu certificado ao final de cada curso.</p>
        </td>
      </tr>
    </table>

    <div class="divBntBenefits">
      <button class="manterAss keepSub">Manter Assinatura</button>
      <button class="continueBnt" id="btnFinalization">Continuar</button>
    </div>
  `
  localMain.append(benefitsDiv)
  keepSubs()

  const BtnFinalization = document.querySelector("#btnFinalization")
  BtnFinalization.addEventListener("click", finalization)
}