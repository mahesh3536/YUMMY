let id1=document.getElementById("cont1");
let id2=document.getElementById("cont2");
let id3=document.getElementById("cont3")
let id4=document.getElementById("cont4")
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
//console.log(id1)
console.log(id3)
function click1(){
     id1.style.display='block'
     id2.style.display='none'
     id3.style.display='none'
     id4.style.display='none'
     btn1.style.backgroundColor='rgba(255,165,0,0.6)'
     btn2.style.backgroundColor='White'
     btn3.style.backgroundColor='White'
     btn4.style.backgroundColor='White'

}
function click2(){
    id1.style.display='none'
    id2.style.display='block'
    id3.style.display='none'
    id4.style.display='none'
    btn1.style.backgroundColor='White'
     btn2.style.backgroundColor='rgba(255,165,0,0.6)'
     btn3.style.backgroundColor='White'
     btn4.style.backgroundColor='White'
}
function click3(){
    id1.style.display='none'
    id2.style.display='none'
    id3.style.display='block'
    id4.style.display='none'
    btn1.style.backgroundColor='White'
     btn2.style.backgroundColor='White'
     btn3.style.backgroundColor='rgba(255,165,0,0.6)'
     btn4.style.backgroundColor='White'
}
function click4(){
    id1.style.display='none'
    id2.style.display='none'
    id3.style.display='none'
   
    // id1.style.display='none'
    // id2.style.display='none'
    // id3.style.display='none'
    id4.style.display='block'
    btn1.style.backgroundColor='White'
     btn2.style.backgroundColor='White'
     btn3.style.backgroundColor='White'
     btn4.style.backgroundColor='rgba(255,165,0,0.6)'
}
