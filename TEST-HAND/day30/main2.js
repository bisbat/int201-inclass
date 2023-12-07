const inputColor=document.querySelector('input')
const bg=document.querySelector('body')

const storedColor=localStorage.getItem('bgcolor')

if(storedColor){
    bg.style.backgroundColor=storedColor
}

inputColor.addEventListener('input',()=>{
    const bgColor=inputColor.value
    bg.style.backgroundColor=bgColor

    localStorage.setItem('bgcolor',bgColor)
})