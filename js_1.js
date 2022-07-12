/*console.log("hello world");
let name ="Mahesh";
let name1="Kaushik";
function greet(name){
console.log(name + " is a good guy.");}
greet(name);
greet(name1);*/


//Alert function in js


//alert("This is a new msg");
/*let age=prompt("What is your age?");
if (age>=18) {
    alert("You are allowed in the club");
} 
else{
    alert("You are not allowed in the club");
}*/
//console.log(name)
/*let deltepost=confirm("Do you really want to delete this post?");
//console.log(deltepost);
if(deltepost){
    console.log("Your post has been deleted successfully");

}
else{
    console.log("Your post is not deleted");
}*/


// loops in js

/*let friends=["Mahesh","Kaushik","Manav","Vinayaka"];
for (let index = 0; index < friends.length; index++) {
   console.log("Hello friend " + friends[index]);
    
}
friends.forEach(function(element){
     console.log("Hello friend "+element);
});
let employee={
    name : "Mahesh",
    salary:1000,
    "name 2":"Thakkar"
}
for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]}.`);
}*/

//NAVIGATING THE DOM

/*let main=document.getElementById('content');
console.log(main);
let nav=document.getElementById('nav');
console.log(nav);
let container=document.getElementsByClassName('container');
console.log(container);
let sel=document.querySelector('.container');//print first container class
console.log(sel);
let sel1=document.querySelector('#nav>li');//print first li class in nav
console.log(sel1);
let sel2=document.querySelectorAll('#nav>li');
console.log(sel2);
*/

//event listinening in 
/*
para.addEventListener('mouseover',function run(){
    console.log('mouse inside');
});
para.addEventListener('mouseout',function run(){
       console.log('mouse outside');
}

);*/
function hide(){
    let para= document.getElementById('para');
    //console.log(para);
    let btn=document.getElementById('btn');
    if (para.style.display!='none') {
        para.style.display='none';
    }
    else{
        para.style.display='block';
    }
}



//settimeout and clear time out

//console.log("this is tutorial 58");
//setimeout->allows us to run the function after the interval of time
//cleartimeout->allows us to run the function repeatedly after the interval of time
/*function greet(name){
    console.log("Hello good morning " + name);
}
setTimeout(greet, 3000,'Mahesh');//it runs the greet function after 2000ms means 2s
//setTimeout(greet(),4000,'mahesh')->wrong as it is callling the function inside setimeout
id=setInterval(greet,2000,'Mahesh');
clearInterval(id);*/
 function displaytime(){
    time = new Date();
    //console.log(time);
    document.getElementById('time').innerHTML=time;
 }
setInterval(displaytime,1000);

//date and time tutorial 

/*let now=new Date();
console.log(now);
let dt=new Date(1000);
let newdate=new Date("2029-09-30");
console.log(newdate);
console.log(dt);
//let newdate1=new Date(year,month,day,hour,minutes,seconds,milliseconds)
let newdate1=new Date(2025,0,10,12,0,1);
console.log(newdate1);
console.log(newdate1.getFullYear());
console.log(newdate1.getMonth());
now.setDate(31);//it automaticallly corrects the date and print july 1
console.log(now);
*/


//Arrow function tutorial

/*function greet(){
    console.log("Good Morning");
}
greet();*/
/*greet = ()=>console.log("good morning");

greet();
let sum=(a,b)=>a+b;
let half=a=>a/2;
let obj1={
    greeting:"Good Morning",
    names:['mahesh','ramesh','amey'],
    speak(){
         this.names.forEach((student)=>{
              console.log(this.greeting +' '+ student);
         });
    }
}
obj1.speak();
*/


//This is math object tutorial

/*let m=Math;
console.log(m);
console.log("the value of PI is ",Math.PI);
console.log("the rounded up value of 5.8 is ",Math.ceil(5.8));
console.log("the rounded down value of 5.8 is ",Math.floor(5.8));
let r=Math.random();//generate random value between 0 and 1
console.log("the random value is ",r);
*/


//JSON

/*let jsonobj={
    name:'harry',
    channel:"cwh",
    friend:'rohan',
    food:'bhindi'
}
console.log(jsonobj);
let string = JSON.stringify(jsonobj);//convert it into string
console.log(string);
string =string.replace("harry",'mahesh');
console.log(string);
obj=JSON.parse(string);
console.log(obj);*/

// node js

//console.log("hello worldd");
