//1. select target
const button=document.querySelector('button')

//2.add function
function displayHello(e){
    console.log(`Hello, ${e.target.id}`);
}

function displayGoodbye(e){
    console.log(`Good bye, ${e.target.id}`);
}

button.addEventListener('click',displayHello)
button.addEventListener('click',displayGoodbye)

button.removeEventListener('click',displayGoodbye)
//remove ต้องใช้เป็นชื่อ function เท่านั้ ทำ anonymouseไม่ได้