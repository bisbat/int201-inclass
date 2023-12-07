// HTML Collection
const heading=document.getElementById('myHeading')
console.log(heading);

const AllList=document.getElementsByTagName('ul')
console.log(AllList);
console.log(AllList[0]);
console.log(AllList[1]);

const classNameHeading=document.getElementsByClassName('heading')
console.log(classNameHeading);
console.log(classNameHeading[0]);
console.log(classNameHeading[1]);

const nameColor=document.getElementsByName('color')
console.log(nameColor);

const classList=document.getElementsByClassName('list-item')
console.log(classList);

//query
const headingQu=document.querySelector('.heading')
console.log(headingQu);

const headdingQu2=document.querySelectorAll('.heading')
console.log(headdingQu2);