export const setDrink = (section) => {
    section.addEventListener("click", (e)=>{
        e.preventDefault();
        console.log(e.target);
    })
}