export const AlertError = {
    open() {
        AlertError.alert.classList.add("open")
    },

    close() {
        AlertError.alert.classList.remove("open")
    },

    alert: document.querySelector(".alert-error")
}