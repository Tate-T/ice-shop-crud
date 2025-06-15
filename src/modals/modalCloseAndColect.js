export const collectModalInfo = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = e.target.elements.nameCollect.value
        document.querySelector(`.hero-backdrop`).style.visibility = "hidden"
document.querySelector(`.hero-backdrop`).style.display = "none"
console.log(name)
    })
}