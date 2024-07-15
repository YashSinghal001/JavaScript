// objects

const students={
    name:"Yash Singhal",
    marks:90,
    printMarks:function(){
        console.log("Marks=",this.marks);
    },
};
// console.log(students.name);


// Prototype

const employee={
    calcTax() {
        console.log("tax rate is 10%");
    },
    // calcTax2:function(){
    //     console.log("tax rate is 10%");
    // },

};

const karan={
    salary:50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};
// const karan2={
//     salary:60000,
// };


karan.__proto__=employee;
// karan2.__proto__=employee;

console.log(karan);
console.log(karan.calcTax);
// console.log(karan2);

// classes

class ToyotaCar {
    constructor(brandname,milage)
    {
        console.log("Creating a new object");
        this.brandname=brandname;
        this.milage=milage;
    }
start()
{
    console.log("start");
}
stop()
{
    console.log("Stop");
}
// setBrand(brand)
// {
//     this.brandName=brand;
// }
}

 let fortuner=new ToyotaCar("fortuner",10);
//  fortuner.setBrand("fortuner");

 let lexus=new ToyotaCar("lexus",10);
 console.log(fortuner);
 console.log(lexus);
//  console.log(fortuner.start);


// Inheritance

class person{
    constructor()
    {
        this.species="Homo Sapiens"
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Do Nothing");
    }
    
}
class Enginner extends person{
    work(){
        console.log("Solve Problems");
    }
    // console.log(Yash.eat());
}

class Doctor extends person{
    work(){
        console.log("Treat Patients");
    }
}

let Yashobj=new Enginner();
 console.log(Yashobj);
 console.log(Yashobj.work());
 console.log(Yashobj.eat());
 let doctorobj=new Doctor
console.log(doctorobj);
console.log(doctorobj.work());
console.log(doctorobj.sleep());


// super() Keyword


class parent {
    constructor(){
        console.log("call parent");

        this.super="Super Keyword";
    }
    eat(){
        console.log("Eat");
    }
}

class child extends parent{
constructor(color){
    super();// invoke parent class constructor
    console.log("call Child");
    this.color=color;
}
work(){
    super.eat();
    console.log("Solve Problems");
}
}

// first super keyword called parent class constructor than child constructor
let parentobj=new parent();
console.log(parentobj);
// first super klyword called parent class constructor than child constructor
let Ramobj=new child("White");
console.log(Ramobj);
console.log(Ramobj.work());



// Try Ctach

let a=10;
let b=5;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
try {
    console.log("a+b=",a+c);
}
 catch (err) {
    console.log();
}
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);