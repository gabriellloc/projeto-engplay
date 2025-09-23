import { feedback } from "./feedback"

export function goBack(){
    const feedbackBtn = document.querySelector("#feedbackBtn")
    feedbackBtn.classList.add("")
    feedbackBtn.addEventListener("click", feedback)
}
    
