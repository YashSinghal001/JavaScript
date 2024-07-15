// Push()  Add To end
let fooditems=["potato","onion","ginger","tomato"];
console.log(fooditems);
fooditems.push("chips","burger");
console.log(fooditems);


// Pop() Delete from End and return

let fooditems1=["potato","onion","ginger","tomato"];
console.log(fooditems1);
let deleteitems=fooditems1.pop();
console.log(fooditems1);
console.log("Delete Items=",deleteitems);

// toStrting()  Converts array to string

let fooditems2=["potato","onion","ginger","tomato"];
console.log(fooditems2);
console.log(fooditems2.toString());

// Concat()  join multiple array & return result
let marvel_heroes=["Ironman","Spiderman","Thor"];
let dc_heroes=["Superman","Batman"];
let heroes=marvel_heroes.concat(dc_heroes);
console.log(heroes);


// unshift() add to start
let marvel1_heroes=["Ironman","Spiderman","Thor"];
marvel1_heroes.unshift("Antman");
console.log(marvel1_heroes);





// Shift() Delete from Start and return
let marvel2_heroes=["Ironman","Spiderman","Thor","Hulk"];
console.log(marvel2_heroes);
let removed=marvel2_heroes.shift();
console.log(marvel2_heroes);
console.log("Delete Items=",removed);

// slice  NO change original array
let marvel3_heroes=["Ironman","Spiderman","Thor","Hulk","Antman"];
console.log(marvel3_heroes);
console.log(marvel3_heroes.slice(1,3));


// Splice():change original array(add,remove,replace)

let arr=[1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);


// ADD Elemnt
// arr.splice(2,0,102);

// DELETE Elemnt
// arr.splice(2,1);


// Replace
arr.splice(3,1,"900");

console.log(arr);