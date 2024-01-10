import { Modal } from './modal.js'

export const inputWeight = document.querySelector("#weight")
export const inputHeight = document.querySelector("#height")
const form = document.querySelector("form")

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    const result = imc(weight, height)
    const message = `Seu IMC é igual a ${result}`

    Modal.message.innerText = message

    Modal.open()
}

function imc(weight, height) {
    return ((weight / (height / 100) ** 2)).toFixed(2)
}