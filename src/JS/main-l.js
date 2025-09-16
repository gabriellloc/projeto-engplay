export function btnMenuFun(){
  const mainContent = document.querySelector("#mainContent")
  const mainL = document.querySelector(".main-l")
  const bntMenu = document.querySelector("#bntMenu")
  
  const h2s = document.querySelectorAll(".childs h2")
  let width = innerWidth
  
  window.addEventListener("resize", ()=> {
    width = innerWidth
    mainContent.classList.remove("blur")
    mainL.classList.remove("sideBar")
  })
  bntMenu.addEventListener("click", () => {
    if( width <= 800){
      mainContent.classList.toggle("blur")
      mainL.classList.toggle("sideBar")
    } else {
      h2s.forEach(h2 => {
        h2.classList.toggle("sideBar-Large")
      })
    }
  })
}

btnMenuFun()