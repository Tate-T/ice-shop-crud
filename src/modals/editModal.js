export const backdropEdit = (button) => {
button.addEventListener("click", () => {
document.querySelector(`.edit-backdrop`).style.visibility = "visible"
document.querySelector(`.edit-backdrop`).style.display = "flex"
})
}