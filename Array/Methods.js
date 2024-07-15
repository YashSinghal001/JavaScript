
document.writeln("Class 13");

document.writeln('<br>' );

let arr = ["a", "b", "c", "d", "e"];
document.writeln(" Normal array :  ");

for(x of arr){
    document.writeln(`${x}` );
}


document.writeln('<br>' );

let arr2 = new Array();
arr2[0]="Aman"
arr2[1]="Yash"
arr2[2]="Shivang"
// arr2[0]="Ganesh"
document.writeln(arr2);


document.writeln('<br>' );
let arr3 = new Array("Aman", "Yash", "Shivang");
document.writeln(arr3);

document.writeln('<br>' );


// methods

let arrM = ["Aman", "Yash", "Shivang", "Rahul","Deepak","Deepika" , "Nikhil"]

// let arrNum= [1,2,8,5,7,9,6,4]
let arrNum= [1,23,43,54,2,4,3,-1,5,6]

// arrM.copyWithin(3,0,4)
// arrM.fill("JavaScript",3,4)
// arrM.pop()
// arrM.push("Java","JavaScript")
// arrM.reverse()
// arrM.shift()
// arrM.unshift("Aman")
// arrM.sort()
arrNum.sort()
document.writeln(arrNum);
// document.writeln(arrM);



document.writeln("class 14");
let fruits = ['apple', 'banana', 'orange', 'kiwi'];
// Remove 2 elements starting from index 1 and insert 'grape', 'melon'
fruits.splice(0, 2, 'shivang', 'Aman','Yash','Ganesh','deepak');
// console.log(fruits);
for(x of fruits){
    document.writeln(x + '<br>' );
    
}

// document.writeln(fruits + '<br>' );
let fruits1 = ['apple', 'banana'];
 let fruits2 = ['orange', 'kiwi'];
 
//  let combinedFruits = fruits1 +" " + fruits2;
 let combinedFruits = fruits1.concat(fruits2);

console.log(combinedFruits);

document.writeln(combinedFruits + '<br>' );

 // Result: ['apple', 'banana', 'orange', 'kiwi'


 let arr1 = ['shivang','aman','yash','deepak','sun']
//  let arr1output = arr1.includes("shivang")
//  let arr1output = arr1.indexOf("shivang")
//  let arr1output = arr1.join(" , ")
//  let arr1output = arr1.slice(2,4)
 let arr1output = arr1.toString()
console.log(arr1output);

 

// document.writeln( " class 15");

let a =['aman','shivang','yash']
let output = a.entries()
document.writeln(...output);

// for(x of a.entries()){
//     document.writeln(x);
   
// }

console.log(...output);

// console.log(a);
//[ [0 ,'amam'] [1,'shivang'] [2,'yash'] ]


// Every methods
let num = [1,2,23,33,4,5,6,7,8,9,10,11];
// let num = [2,4,6,8,10];

let NumOutput = num.every((x) => x%2== 0 )

console.log(NumOutput);


// filter
let filterNum = num.filter(x => x%2!=0)
console.log(filterNum);

// find Index
let FindNumIndex = num.findIndex(x => x%3 == 0)
console.log(FindNumIndex);

// find
let FindNum = num.find(x => x%3 == 0)
console.log(FindNum);


// map
let MapNum = num.map(x => x * x)
console.log(MapNum);


// Reduce 

let ReduceNum = num.reduce((acc , crt)=> acc - crt)

console.log("ReduceNum : "+ ReduceNum);

// Reduce Right
let ReduceRightNum = num.reduceRight((acc , crt)=> acc - crt)
console.log("ReduceRightNum : "+ ReduceRightNum);


// let count = 0 ;
// for(let i = 0; i<num.length; i++){
//     count = num[i]+count
// }
// console.log( "Add array : "+count);



// Some 

let someNum = num.some((x)=> x %2 ==0 )
console.log(someNum);


// keys
let keyNum = num.keys();
console.log(...keyNum);

// values
let ValueNum = num.values();
console.log(...ValueNum);



let a1 = {
    length:4,
    1:'Yash',
    2:'Aaman',
    3:'Dipak',
    0:'shivang'
}

let  output1 = Array.from(a1);
console.log(output1);


// of 
// let arr = [ 'Yash', 'Aaman', 'Dipak']
let arr8 = Array.of('Yash', 'Aman', 'Dipak','Shivang');

console.log(arr8);