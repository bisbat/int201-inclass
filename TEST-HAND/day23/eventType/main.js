
//1.create <div> and <p>
const parentDiv=document.querySelector('body')

const newDiv=document.createElement('div')
parentDiv.appendChild(newDiv)

const newP=document.createElement('p')
const parentP=document.querySelector('div')
parentP.appendChild(newP)

//2.function in submit button
const button =document.querySelector('button')

const usernameInput=document.getElementById('input-user')
const passwordInput=document.getElementById('input-psw')

button.addEventListener('click',(e)=>{
    e.preventDefault()
    if(usernameInput.value===''){
        newP.textContent='Please Enter your username'
    }else if(passwordInput.value===''){
        newP.textContent='Please Enter your password'
    }else{
        newP.textContent='Submit successful!'
    }
})

//or 


// button.addEventListener('click',(e)=>{
//     const allInput=document.querySelectorAll('input')

//     const isComplete=Array.from(allInput).every((input)=>input.value.length>0)

//     e.preventDefault()
//     if(isComplete){
//         newP.textContent='Your input are complete'
//     }else{
//         newP.innerHTML='<span style="color:red">Missing some value, please enter again</span>'
//     }
// })
