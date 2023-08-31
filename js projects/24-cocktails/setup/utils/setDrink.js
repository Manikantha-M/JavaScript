
export const setDrink = (section) => {
    section.addEventListener("click", (e)=>{
        const id = e.target.parentElement.dataset.id
        sessionStorage.setItem('drink', id)
    })
}