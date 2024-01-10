import { AlertError } from './alert-error.js'
import { Modal } from './modal.js'
import { calculateIMC, notNumber } from "./utils.js"

export const inputWeight = document.querySelector("#weight")
export const inputHeight = document.querySelector("#height")
const form = document.querySelector("form")

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
    
    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return
    }
    AlertError.close()
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}


function displayResultMessage(result){
    const message = `Seu IMC é igual a ${result}`

    Modal.message.innerText = message
    Modal.open()
}