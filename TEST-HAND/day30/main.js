const input=document.getElementById('inputColor')
const p=document.querySelector('p')
const text=document.querySelector('h1')

const storedColor=localStorage.getItem('fontColor')

if(storedColor){
    p.style.color=storedColor
    text.style.color=storedColor
}

input.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        const color=input.value

        
        p.style.color=color

        
        text.style.color=color

        localStorage.setItem('fontColor',color)
    }
})