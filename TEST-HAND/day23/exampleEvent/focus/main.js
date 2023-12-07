//Focus Event

const usernameInput=document.getElementById('input-user')
const passwordInput=document.getElementById('input-psw')

usernameInput.addEventListener('focus',(e)=>{
    console.log('focus on username input');
    usernameInput.style.backgroundColor='#e6f7ff'
})

usernameInput.addEventListener('blur',(e)=>{
    console.log('blur');
    usernameInput.style.backgroundColor=''
})

passwordInput.addEventListener('focus',()=>{
    passwordInput.style.backgroundColor='#e6f7ff'
})

passwordInput.addEventListener('blur',()=>{
    passwordInput.style.backgroundColor=''
})

//add p for message
const parentDiv=document.querySelector('body')
const newP=document.createElement('p')
parentDiv.appendChild(newP)

//button function event
const submitButton=document.querySelector('button')

submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    if(usernameInput.value===''){
        newP.textContent='Please enter your username'
        newP.style.color='red'
    }else{
        newP.textContent=`Welcome, ${usernameInput.value}! Form submitted successful.`
        newP.style.color='green'
    }
})
