const clickDiv=document.getElementById('myDiv')

clickDiv.addEventListener('mouseover',()=>{
    console.log('Mouse over the div');

    clickDiv.style.background='lightgreen'
})

clickDiv.addEventListener('mouseout',()=>{
    console.log('Mouse out');

    clickDiv.style.background='lightblue'
})
