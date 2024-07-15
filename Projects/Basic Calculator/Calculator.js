let first=document.getElementById("First");
let second=document.getElementById("Second");
let calculate=document.getElementById("res");
let ope=document.getElementById("ope");

function cal()
{
let calculateresult=calculate.value;
    let ope1=ope.value;
    let opr1=first.value;
    let opr2=second.value;
    if(opr1=="" || opr2=="" )
    {
alert("Please enter the number")
    }

else if(ope1=='+')
{
        let add=parseInt(opr1) + parseInt(opr2);  
        alert(add);
       
}
else if(ope1=='-')
{
        let add=parseInt(opr1) - parseInt(opr2);  
        alert(add);
       
}
else if(ope1=='*')
{
        let add=parseInt(opr1) * parseInt(opr2);  
        alert(add);
       
}
else if(ope1=='/')
{
        let add=parseInt(opr1) / parseInt(opr2);  
        alert(add);
       
}
// calcaate value
let resultcalculate=document.createElement("p");
resultcalculate.innerText=add;
console.log(resultcalculate);

calculate.appendChild(resultcalculate);
calculateresult=add;

}

