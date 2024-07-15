// console.dir To print its Properties and methods
// console.log to print hte code what we write


console.log(window);
console.dir(window.document);
console.log(window.document);
// Access Body
 console.dir(document.body);//To print its object
 console.log(document.body);//to print the our code
// // Access Head
 console.log(document.head);

// changes in HTML
// document.body.childNodes[3].innerText="abcd";
// document.body.style.background="green";


// DOM Manipultaions

// BY Id
// let heading=document.getElementById("heading");
// console.log(heading);
// console.dir(heading);

// BY Class
let headings=document.getElementsByClassName("heading_class");
console.log(headings);
console.dir(headings);

// BY Tag
let paragraphs=document.getElementsByTagName("p");
console.log(paragraphs);
console.dir(paragraphs);

// BY Query
let firstelement=document.querySelector(".heading_class");//First Elements
console.dir(firstelement);

// let Allelement=document.querySelectorAll(".heading_class");//All Elements
// console.dir(Allelement);


// Properties

// tag Name
console.dir(firstelement.tagName);

// innertext
let fruits=document.querySelector("div");
console.dir(fruits.innerText);

let h4=document.querySelector("h4");
console.log(h4.innerText="Old Heading");


// // innerHTML
console.dir(fruits.innerHTML);
console.log(h4.innerHTML="<i>Old Heading</i>");


// textContent
let hide=document.querySelector("h5");
console.dir(hide.textContent);