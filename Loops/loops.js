//For Loop
//Print 1 of 5
for(let i=1;i<=5;i++)
{
    console.log("Yash Sinhal");//Execute5 Times
    // document.writeln("Yash Sinhal");
    
}

//While loop
// let i=1;
// while(i<=5)
// {
//     i++;
//     console.log(i,"Hello World")
// }


//Do-While

// let a=1;
// do
// {
//     console.log("World");
//     a++;
// }
// while(a<=5);

//For-of  loop

// let str="YashSinghal";
// for(let i of str)
// {
//     console.log("i=", i);
// }


let str1="Javascript";
let size=0;
for(let b of str1)
{
    console.log("b=", b);
    size++;
}
console.log("String size=",size);



// For-in Loop

let student={
    name:"Yash Singhal",
    age:19,
    cgpa:9.0,
    isPass:true,
};
for(let key in student )
{
    console.log("Key=",key, "Value=",student[key]);
}