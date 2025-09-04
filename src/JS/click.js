import { reception } from "./reception.js"

const nav = document.querySelector("#nav")
const content = document.querySelector("#content")
const btnCancel = document.querySelector("#cancel")

btnCancel.addEventListener("click", cancel)

function cancel(){
  nav.classList.add("blur")
  content.classList.add("blur")

  reception()
}