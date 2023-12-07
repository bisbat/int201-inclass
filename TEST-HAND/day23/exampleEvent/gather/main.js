const usernameInput=document.getElementById('input-user')
const passwordInput=document.getElementById('input-psw')
const submitButton=document.querySelector('button')

submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
})

usernameInput.addEventListener('keydown',(e)=>{
    // console.log(e.key);
    if(e.key>=0&&e.key<=9){
        e.preventDefault()
    }
})

// usernameInput.addEventListener('keyup',(e)=>{
//     if(e.key==='Enter'){
//         const output=document.querySelector('p')
//         output.textContent=e.target.value
//     }
// })

usernameInput.addEventListener('input',(e)=>{
    const output=document.querySelector('p')
    output.textContent=e.target.value
})