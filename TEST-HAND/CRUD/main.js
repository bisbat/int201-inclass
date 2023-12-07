//CRUD

//create = documentในการสร้างelement
//1.create element
const newEle=document.createElement('li')
//result = <li></li>

//2.set attribute
//newEle.setAttribute('Name','value')
newEle.setAttribute('class','devops')
newEle.setAttribute('name','devopsLect')
//result = <li class='devops' name='devopsLect'></li>

//3. add text value to element **ข้อสอบให้ใช้textContentทุกครั้ง
newEle.textContent='Siam Yamsangsung'
//result = <li class='devops' name='devopsLect'>Siam Yamsangsung</li>
//ลองเล่นๆ
// newEle.innerHTML='<span style="color:red">Siam Yamsangsung</span>'


//update = addมันเข้าไปในtree โดยใช้appendChid ซึ่งจะaddไปต่อท้ายเสมอ
//4.add new li element to a parent node
//4.1 find parent node ที่จะaddเข้าไป
const divParent=document.querySelector('.lecturers ul')
console.log(divParent);
//or
// const ulLect2=document.querySelector('div.lecturers > ul')
// console.log(ulLect2);

//4.2 add มันเข้าไป
divParent.appendChild(newEle)

//4.2.1 แต่ถ้าไม่อยากต่อท้าย จะแทรกต้องใช้ insertBefore(insertElement,beforeElement)
//เช่น อยากแทรกต้องก่อนอาจารย์เกรียงไกร
const kkboy=document.querySelectorAll('.programming')
console.log(kkboy[1]);

//divParent.insertBefore(newEle,kkboy[1])//ไปแทรกหน้าkkboyละ

//4.2.2 จะเอาไปแทนที่ ใช้ replaceChild(new,ref)


//remove = removeChild(refNode)
divParent.removeChild(kkboy[1])
