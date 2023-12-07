const inputbox=document.getElementById('myInput')
const output=document.querySelector('p')

inputbox.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        output.textContent=e.target.value
    }else{
        output.textContent='no input'
    }
})