function myfunction(){
    console.log("Yash Singhal");
    console.log("Learning JS");
}
myfunction();

// Parametrs

function fun(msg,n){
console.log(msg,n);
}
fun("Hello",100);


function sum(x,y){
 s=x+y;
    return s;
    // return (x+y);
}
let value=sum(10,20);
console.log(value);
// console.log(sum(10,20));


// Arrow function

let arrowmult=(a,b)=>{
    return a*b;
};
let vale=arrowmult(2,3);
console.log(vale);



// Methods


// For Each in Array (We can Pass Function as an Parameters)  {Highest order Method/Function}

// let arr=[1,2,3,4,5];
// arr.forEach(function value (vale1)
// {
//     console.log(vale1);
// });

let arr=["pune","delhi","mumbai"];
arr.forEach((vale1,idx,arr)=>
{
    console.log("ForEach Method=",vale1.toUpperCase(),idx,arr);
}); 


// Map Method(Similar To ForEach Method But It Create new array )


let arr1=[1,2,3,4,5];
arr1.map(function value (vale2)
{
    console.log("Map Method=",vale2);
});


let arr2=[1,2,3,4,5];
let newarr=arr2.map((vale3)=>{
    return vale3*2;
});
console.log("Map Method=",newarr);


// Filter Method

let arr3=[1,22,3,4,53,63];
let evenarr=arr3.filter((res)=>{
return res%2===0;
});
console.log("Filter Method=",evenarr);


// Reduce Method
//when value store it store in pre 


let array=[1,2,3,4];
let output=array.reduce((pre,curr)=>{
    return pre+curr;
});
console.log("Reduce Method=",output);

let array1=[1,2,3,4];
let output1=array.reduce((pre,curr)=>{
    return pre>curr?pre:curr;
});
console.log("Reduce Method To Find Largest number in array=",output1);