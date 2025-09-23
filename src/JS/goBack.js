import { benefits } from "./benefits"
import { feedback } from "./feedback"

export function goBackForm(){
    const feedbackBtn = document.querySelector("#feedbackBtn")
    feedbackBtn.classList.add("scale-1-hover")
    feedbackBtn.addEventListener("click", feedback)
}

export function goBackBenefits(){
    const centerBar = document.querySelector("#center-bar")
    centerBar.classList.add("scale-1-hover")
    centerBar.addEventListener("click", benefits)
}