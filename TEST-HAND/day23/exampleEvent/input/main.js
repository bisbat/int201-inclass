const inputbox=document.getElementById('myInput')
const output=document.querySelector('p')

inputbox.addEventListener('input',(e)=>{
    output.textContent=e.target.value
})