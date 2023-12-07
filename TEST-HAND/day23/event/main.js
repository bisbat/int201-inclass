// Add Event
//1. select target HTML object
const button=document.querySelector('button')
console.log(button);

//2.write function
button.addEventListener('click',()=>{
    console.log('submit button is clicked!');
})
//or create function แยก แล้วค่อยไปเรียก
// function displayName(){
//     console.log('My Name is Baitong');
// }
// button.addEventListener('click',displayName)




//Event Object ดูต่อได้ในevent.js
button.addEventListener('click',(e)=>{
    console.log('--------');
    console.log(e.target.id);
})
//เอาไว้ทำอะไร คือ e = event เมื่อเรากดปุ่ม เราจะรู้ได้ยังไงว่าเรากดปุ่มไหน ก็จะรู้ผ่านe คือ object ที่เราสร้างเพื่อมารับไว้ ทำให้นำไปใช้ประโยชน์ต่อได้

