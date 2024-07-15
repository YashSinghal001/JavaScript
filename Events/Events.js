let btn1=document.querySelector("#btn1");

btn1.onclick = (evt) =>{
    console.log("btn1 was Clicked");
    let a=25;
    a++;
    console.log(a);//26

   
}

function fun() {
    console.log("btn1 same was Clicked");
    let a=25;
    a++;
    console.log(a);//26  
}

let box=document.querySelector("#box1");

box.onmouseover = () =>{
    console.log("Your are hover the div");
    
}
// Event Object

let btn2=document.querySelector("#Event");

btn2.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientX);
}

// Event Listener
let btn3=document.querySelector("#listenerevent");

// btn3.addEventListener("click", () => {
//     console.log("Event Listener");
// });

// btn3.addEventListener("click" , add)
// function add()
// {
//     console.log("Event Listener");
// }
// function sum(){
//     console.log("Click");
//     this.style.backgroundColor="blue";

// }
let colorBox= document.getElementById('boxed');

box.addEventListener('dblclick',function(){
    this.style.backgroundColor='red';
    console.log("cl")
  
})
