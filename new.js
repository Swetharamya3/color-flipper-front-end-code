console.log("new changes");
let access=document.querySelector("button");
let empty1=document.querySelector("#empty");
access.addEventListener('click',(event)=>{
    let rand1=Math.floor(Math.random()*255)+1;
    let rand2=Math.floor(Math.random()*255)+1;
    let rand3=Math.floor(Math.random()*255)+1;
    let color1=`rgb(${rand1},${rand2},${rand3})`;
    document.body.style.backgroundColor=color1; 
    empty1.textContent=document.body.style.backgroundColor;
    access.style.backgroundColor=color1;
});
