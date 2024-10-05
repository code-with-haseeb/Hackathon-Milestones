const togglButton = document.getElementById(`toggle-Skills`) as HTMLButtonElement
const Skills = document.getElementById(`Skills`) as HTMLElement

togglButton.addEventListener(`Click`,()=>{
    if(Skills.style.display === `none`){
        Skills.style.display = `block`
    } else {
        Skills.style.display = `none`
    }
});