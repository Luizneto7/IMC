import { inputHeight, inputWeight } from "./script.js"

export const Modal = {
    message: document.querySelector(".title span"),
    wrapper: document.querySelector(".modal-wrapper"),
    buttonClose: document.querySelector(".close"),

    open() {
        Modal.wrapper.classList.add("open")
    },

    close() {
        Modal.wrapper.classList.remove("open")
    },

    clearInput () {
        inputHeight.value = ""
        inputWeight.value = ""
    },
}

Modal.buttonClose.onclick = () => {
    Modal.close()
    Modal.clearInput()
}

window.addEventListener("keydown", handleKeyDown)

function handleKeyDown (event){
    if(event.key === "Escape"){
        Modal.close()
        Modal.clearInput()
    }
} 