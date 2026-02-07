//1.VAR

//a.
// console.log(my);
// var my=10;
// console.log(my);

//b.
// var my=20;               //var can be redeclared
// console.log(my);

//c.
// //var has function scope
// function demofunction(){     //var ye fn ke andar hi use ho skta hai
//     var my=30;
//     console.log(my);
// }
// demofunction();
// console.log(my);   //refernec error


//2.LET


//a.
// let mylet=10;
// console.log(mylet);
// let mylet=20;       no redeclare


//b.
// {
//     let x=50;
//     console.log(x);
// }
// {
//     let x=100;
//     console.log(x);
// }

//c.(var shadowing)
// {
// let x=50;
// console.log(x);
// {
//     let x=100;
//     let y=200;
//     console.log(y);
//     console.log(x);
// }
// }



//d.
// {
//     let x=50;
//     console.log(x);
//     if(true)
//     {
//         let x=100;
//         console.log(x);
//     }
//     console.log(x);
// }



//3.CONST

// const ok=10;
// console.log(ok);


//block scope
// {
//     const dip=10;
//     console.log(dip);
// }
// {
//     const dip=40;
//     console.log(dip);
// }


// const arr=[1,2,"Hello"];
// arr.push(3);
// console.log(arr);

// arr=[4,5,6];
// console.log(arr);

// function
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

//names function
//  let div= function devdide(a,b){
//     return a/b;
//  }
//  console.log(div(8,2));



//anonymous function(which has no name)
// let multiply=function(a,b){
//     return a*b;
// };
// concole.log(multiply(3,4));

//->advantage of anonymous fn related to memory 
//1.reduce memory usage since they are not stored in the global scope and can be garbage collected when no longer needed.

//->related to code conciseness



//Arrow fn


//single expression body
//1.  let multiply=(a,b)=>a*b;
// console.log(multiply(5,6));

// 2.let subtract =(a,b)=>a-b;
// console.log(subtract(4,5));

//with multiple expression body 
// let div=(a,b)=>{
//     let res=a/b;
//     return res;
// }
// console.log(div(14,2));


//This keyword
// console.log(this);

// function hello(){
//     console.log("Hey whatsapp");
//     console.log(this);
// }
// hello();

//===OBJECT===//
// an object is a collection of key value pairs used to represent real world entities.

// const user={
//     name:"Abhishek",
//     role:"Trainer",
//     experience:13
// };

//keys->properties
//Values->data pr fn(methods)

// const user={
//     name:"Abhishek",
//     role:"Trainer",
//     experience:13
// };
// user={
//     name:"Abhi",
//     role:"Dev"
// };

//problem in this  :  TypeError: Assignment to constant variable.

//Issues with objects
// ->no strict type safety
//->
//ex
// let a={x:10};
// let b=a;
// b.x=20;
// console.log(a.x);    //20
  

//class Syntax(major ES6 enhancement)
// class User{
//     constructor(name){
//         this.name=name;
//     }
// }


// const obj1={
//     name:"Vishal",
//     obj2:{name:"Abhi",age:45}
// };
// console.log((obj1.obj2).age);


// let book={
//     title:"The Great"
// };
// console.log(book.title);
// let book2=book;
// book.title="JS Book";

// console.log(book.title);
// console.log(book2.title);

// create object with class
// class Book{
//     constructor(title){
//         this.title=title;
//     }
// }
// let  book3=new Book("Rich");

// // acess objet7c property
// console.log(book3.title);

// let x=20;
// let y=x;
// y=30;
// console.log(x);
// console.log(y);



// //shallow copy concepts
// let x=[1,2,3];
// let y=x;
// y[0]=10;
// console.log(x[0]);




// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// let p1=new person("Vishal",20);
// console.log(p1);                          
// let p2=new person("Sachin",30);
// console.log(p2);
// console.log(p1==p2);    //it is false that means it is deep coy




// function test(){
//     console.log("Hey");
//     console.log(this);
// }
// test();



// let person={
//     name:"John",
//     greet:function(){
//         console.log(`Hello, my name  is ${this.name}`);
//         console.log(this);
//         let innerGreet=()=>{
//             console.log("Hello from inner greet "+this.name);
//             console.log(this);
//         }
//         innerGreet();
//     }
// };
// person.greet();





// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

// greet(){
//     console.log(`Hello my name is ${this.name} and i am ${this.age} years old`);
//     console.log(this);
//     function innerGreet(){
//         console.log("Inner great my name is "+this.name,"and i am",this.age,"years old.");
//     }
//     innerGreet.call(this);
// }
// }




// destructuring

// let arr=[1,2,3];
// // let[a,b,c]=arr;
// // console.log(`${a} ${b} ${c}`);

// let[a, , , , b]=arr;
// console.log(`${a} ${b}`);