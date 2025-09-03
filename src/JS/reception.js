const body = document.querySelector("body")

export function reception(){
  const receptionModal = document.createElement("dialog")
  
  body.appendChild(receptionModal)
  receptionModal.showModal()
}