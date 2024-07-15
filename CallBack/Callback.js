// Synchronous
// console.log("One");
// console.log("Two");
// console.log("<br>");

// // ASynchronous
// console.log("One");
// console.log("Two");

// // setTimeout(() =>{
// // console.log("Hello World");
// // },4000)

// console.log("Three");
// console.log("Four");

// // ------------------------------------------------------

// // CallBacks

// // CallBacks Synchronous
// function sum(a,b){
// console.log(a+b);
// }
// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);
// }
// calculator(2,2,sum);

// ------------------------------------------------------

// CallBacks ASynchronous

// const hello = () =>{
//     console.log("Hello");
// }
// setTimeout(hello,2000)

// ------------------------------------------------------

// Callback Hell Nested Callbacks

// Each Data Get After 2 Second

// function getdata(dataId, getNextData) {
//     // 2sec
//     setTimeout( () =>{
//         console.log("data",dataId);
//         if(getNextData)
//             {
//                 getNextData();
//             }
//     },2000);
// }

// getdata(1, () =>{
//     console.log("getting data 2....");
//     getdata(2, () =>{
//         console.log("getting data 3....");
//        getdata(3, () =>{
//          console.log("getting data 4....");
//             getdata(4);    
//       });
//     });
// });

// ------------------------------------------------------

// Promises Solution to Callback Hell

// let promise=new Promise((resolve,reject) => {
// console.log("I am Promise");
// // resolve(123);
// reject("Some Error Occured");
// // console.log(promise);
// });

// function getdata(dataId, getNextData) {
//     // API's Return Promise
//     return new Promise((resolve,reject) => {
//     // 2sec
//     setTimeout( () =>{
      
//         console.log("data",dataId);
//         resolve("Sucess");
//         // resolve("Reject");
//         if(getNextData)
//             {
//                 getNextData();
//             }
//     },5000);
// });
// }

// Promise Pending
// console.log(promise);
// Afetr 5 Seconds promise sucess
// console.log(promise);



// const getPromise = () => {
// return new Promise((resolve,reject) => {
// console.log("I am Promise");
// resolve("153");
// // reject("Network Error Occured");
// });
// };

// let promise= getPromise();
// promise.then ((res) =>{
//     console.log("Promise Fulfilled",res);
// });

// promise.catch ((err) =>{
//     console.log("Rejcted",err);
// });


// function asyncFunc(){
//     return new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         console.log("Data1");
//          resolve("Sucess");
//     },3000)
//     });
// };
// console.log("Fectinng Data.....");
// let p1=asyncFunc();
// p1.then((res) =>{
//     console.log(res);
// });

// Promise Chain

// function asyncFunc1(){
//     return new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         console.log("Data2");
//          resolve("Sucess2");
//     },5000)
//     });
// };



// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         console.log("Data3");
//          resolve("Sucess3");
//     },3000)
//     });
// };

// console.log("Fetching Data2.....");
// let p2=asyncFunc1();
// p2.then((res) =>{
//     console.log(res);
//     console.log("Fetching Data3.....");
// let p3=asyncFunc2();
// p3.then((res) =>{
//     console.log(res);
// });
// });

// function getdata(dataId) {
//     // API's Return Promise
//     return new Promise((resolve,reject) => {
//     // 2sec
//     setTimeout( () =>{
      
//         console.log("data",dataId);
//         resolve("Sucess");
//         // resolve("Reject");
//     },2000);
// });
// }

// Promise Chain

// console.log("Fetching Data1.....");
// let promise= getdata(1);
// promise.then((res) =>{
//     console.log(res);
//     console.log("Fetching Data2.....");
//     let promise1= getdata(2);
// promise1.then((res) =>{
//     console.log(res);

//     console.log("Fetching Data3.....");
//     let promise2= getdata(3);
// promise2.then((res) =>{
//     console.log(res);
// });
// });
// });

// Actual Write this way Promise Chain

//     console.log("Fetching Data1.....");
// getdata(1)
// .then ((res) => {
//         console.log("Fetching Data2.....");
//     return getdata(2);
// })
// .then ((res) => {
//         console.log("Fetching Data3.....");
//     return getdata(3);
// })
// .then ((res) => {
// console.log(res);
// });

// ------------------------------------------------------

// Async-Await


async function Fun(){
    console.log("Hello World");
}

// function api(){
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Wheather Data");
//         resolve(200);
//     },2000);
//     });
// }

// async function getWheatherData(){
//     await api();//1
//     await api();//2
// }
// console.log(getWheatherData());


function getdata(dataId) {
    // API's Return Promise
    return new Promise((resolve,reject) => {
    // 2sec
    setTimeout( () =>{
      
        console.log("data",dataId);
        resolve("Sucess");
        // resolve("Reject");
    },2000);
});
}

async function getAllData(){
    console.log("Fetching Data1.....");
    await getdata(1);
    console.log("Fetching Data2.....");
    await getdata(2);
    console.log("Fetching Data3.....");
    await getdata(3);
    console.log("Fetching Data4.....");
    await getdata(4);
}
console.log(getAllData()); 


// IIFE
// (async function (){
//     console.log("Fetching Data1.....");
//     await getdata(1);
//     console.log("Fetching Data2.....");
//     await getdata(2);
//     console.log("Fetching Data3.....");
//     await getdata(3);
//     console.log("Fetching Data4.....");
//     await getdata(4);
// }) ();
