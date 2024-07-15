const URL= "https://api.thecatapi.com/v1/images/search?limit=10";
const paraheigth=document.querySelector('#height');
const btn=document.querySelector('#btn');






let promise=  fetch(URL);
console.log(promise);

const getFacts = async () => {
    console.log("Getting Data....");
let reponse= await fetch(URL);
console.log(reponse);// key value
let data=await reponse.json();//json method
console.log(data);// Array type

paraheigth.innerHTML=data[1].height
// console.log();

}
console.log(getFacts());
btn.addEventListener("click",getFacts);

// Promise Chain

// function getFacts(){
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) =>{
//         console.log(data);
//         paraheigth.innerHTML = data[2].height;
//     })
// }
// console.log(getFacts());
// btn.addEventListener("click",getFacts);