let str="Apna\tCollege";//Input String
console.log(str);
console.log(str[8]);//Index of string

// Tepmlate Literals

let obj={
    item:"pen",
    price:10,
};
console.log("The Cost of ",obj.item,"is ",obj.price);
console.log(`The Cost of ${obj.item} is ${obj.price}`);


// Escape Charcters

console.log("Yash\nSinghal");
console.log("Yash\tSinghal");

let str1="Apna College";//Input String
console.log(str1);
console.log(str1[8]);//Index of string
 console.log(str1.length);//length of string

 // toupper Case()

 let a="yashSinghal";
 let newstr=a.toUpperCase();
 console.log(newstr);

//  toLowerCase()

let b="yashSinghal";
let newstr1=b.toUpperCase();
console.log(newstr1);

//  trim() it removes white spaces from Strating and Ending

let c="     yash Singhal JS    ";
let newstr2=c.trim();
console.log(newstr2);

// slice(start,end)  (substring) Extract The Part of The Given String

let d="Hello World";
d=d.slice(1,9);
console.log(d);

// concat Tom Join two String Together

st1="Yash";
st2="Singhal";
let res=st1.concat(st2);
console.log(res);

// replace() It repace word with another Word

let st3="RED GREEN BLACK WHITE";
let st4=st3.replace("RED","123");
console.log(st4);

let str5="Hellololo"
console.log(str5.replaceAll("lo","p"));

// charAt() tom serach Charcter

let st6="Yash Singhal";
 st6=st6.charAt(8);
console.log(st6);

