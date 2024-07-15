// Get Attribute
let div1=document.querySelector("div");
console.log(div1);

let id=div1.getAttribute("id");
console.log(id);

let name=div1.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));
// Set Attribute
console.log(para.setAttribute("class","New Class"));

// Style

// let div2=document.querySelector("div");
// console.log(div2);
// div2.style.backgroundColor="red";
// div2.style.fontSize="25px";
// div2.style.border="2px dotted black";
// div2.innerText="Hello!";




// Insert Element

// First Create
let newBtn=document.createElement("button");
newBtn.innerText="Click me!";
console.log(newBtn);

// ADD

// append -> add then end ofthe node(Inside)

let div=document.querySelector("div");
// console.log(div);
div.append(newBtn);

// prepend -> add then start ofthe node(Inside)
div.prepend(newBtn);

// before -> add before the node(Outside)
div.before(newBtn);

// after -> add after the node(Outside)
div.after(newBtn);

let newheading=document.createElement("h1");
newheading.innerHTML="<i>Hello World!</i>";
console.log(newheading);

let body=document.querySelector("body");
body.prepend(newheading);

// Delete/remove

let para1=document.querySelector("P");
para1.remove();