//SELECTOR
//1.select a node with its ID
const ulStudent=document.getElementById('students')
console.log(ulStudent);
//if have the same name of ID then its return the first one
//**getElementById mujst use root node which is document but querySelector can you any node that is parent node

//2.select by CSS selector
//.=class
//#=id
const programming=document.querySelector('.programming')
console.log(programming);

const coursesClass=document.querySelector(' .courses')
console.log(coursesClass);
//querySelector หาตามparent node

//HTML collection เป็นarray-lke คือเหมือนarrayแต่ไม่ใช่ can use index and length but can not use array fuction
//NodeList เป็นarray-like เหมือนกัน แต่สามารถใช้forEachได้อย่างเดียว array function อย่างอื่นใช้ไม่ได้

const pEle=document.getElementById('p-01')
const pEleAttr=pEle.attributes //จัดการattributes


