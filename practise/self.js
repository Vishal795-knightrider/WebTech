//1.var : fn and global scope(agar fn ke andar nhi declare bahar khi kr rha hu to ab yeh kahi se bhi access ho jayega)  but not block scope

// function ex(){
//     var x=10;
//     console.log(x);
// }
// ex();            //10
// console.log(x);     //reference error :x is not defined

//==redeclare==(problem in debug)
// var x=10;                 //or var x=10;
// var x=20;                 // var x="abhi"; 
// console.log(x);

//==reasign==
// var x=40;
// x="abhi";
// console.log(x);

// var has some drwabacks,especially related to varaibel hoisting and lack of block scope.
// due ot these issues let and const were introduced in ES7 to provide better variable scoping mechanism


//2.let : block scope

// let x=10;
// if (true)
// {
//     let y=20;
//     console.log(x);      //10
//     console.log(y);     //20
// }
// console.log(x);          //10
// console.log(y);          //y is not defined

//===redifinition(not possible)
// let a=20;
// let a=30;

//==reassign==(possible)
// let a=10;
// a=20;
// console.log(a);

//3.const

//redifiniton and reassign(not possible)




//strict and loose eqlity

// console.log('5'==5);     true  //only check value
// console.log('5'===5);    false //checl datatype and value 


//ternary
// let age=20;
// let ans=(age>18) ? "can vote" : "not able to vote";
// console.log(ans); 


//===working with non booleans===//
// //ex:
// console.log(true && "hey");
// console.log( 0 || false);

// Falscy          truthy
// ->undefined     ->anything which is not true
// ->null
// ->0
// ->false
// ->NaN
// ->' '

 

//===STRINGS===//

// let firstname='Vishal';
// let secondname="Kashyap";
// let name1=`This is vishal
// kashyap stdying
// kiet ghaziabad`;
// let Name=new String("Hey ok");

// console.log(firstname);
// console.log(secondname);
// console.log(name1);
// console.log(Name);

//Operation

// let op1='ENGLISH ';
// let op2='Hindi';

// console.log(op1+op2);
// let ans=`${op1} and ${op2}`;
// console.log(ans);
// console.log(op2.length);
// console.log(op1.toLowerCase());


//===substring===
// let str='Vishal';
// console.log(str.substring(2));
// console.log(str.substring(2,5));

// //===split==
// let sen="Hello \\Jee \\Kaise \\ho \\saare";
// let words=sen.split('\\');

// console.log(words);
// console.log(words.join('_'));



//===functions===//

// function avg(num1,num2){
//     console.log(`Average:${(num1+num2)/2}`);
// }
// avg(8,8); 


// let square=function(num){
//     return num*num;
// }
// console.log(square(5));


//Arrow fn

// let getExp=(x,y)=>{
//     return x**y;
// }

// console.log(getExp(2,10));


// ===Arrays===//

//  let ar=[1,2,3,4];
//  let brr=new Array("love",0,null,8);

//  console.log(arr);
//  console.log(brr);

 //built in methods
 
// let arr=[1,2,"Hey",9];

// arr.push("OK");
// arr.push(40);
// arr.push(59);
// arr.push(87);
// arr.push(90);
// // arr.pop();
// // arr.shift();               //remove from the front
// // arr.unshift("This")        //add to the front
// console.log(arr.slice(2,5));
// arr.splice(1,2,"Kunal")      //1 index se 2 value remove karo or vaha pr "Kunal dalo"

// console.log(arr);

//MAP
// let arr=[10,20,30,40,55,69,79,45];
// let ans=arr.map((num)=>{
//     return num*num;
// })
// console.log(ans);


// arr.map((num,ind)=>{
//     console.log(num);
//     console.log(ind); 
// })

//FILTER

// let ans=arr.filter((num)=>{
//     if(num%2===0) return true;
//     else return false;
// });

// console.log(ans);

// let arr=[1,4,"Love","hey",null];

// let ans=arr.filter((value)=>{
//     if(typeof(value)==='string') return true;
//     else return false;
// })

// let an=arr.filter((value)=>{
//     if(typeof(value)==='number') return true;
//     else return false;
// })
// console.log(ans);
// console.log(an);

//Reduce

// let arr=[10,20,30,40,2,9,19];

// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);

// console.log(ans);
// arr.sort((a, b) => a - b);
// console.log(arr);

// console.log(arr.indexOf(9));


//===LOOP===//

//->for each
// let arr=[10,25,56,70];

// arr.forEach((val,idx)=>{
//     console.log(`Number: ${val},Index: ${idx}`);
// })

//->for in 
// let obj={
//     name:"Vishal",
//     age:25,
//     weight:60,
//     greet: function(){
//         console.log("Hey who you are");
//     }
// };

// for(let key in obj){
//     console.log(`${key} ${obj[key]}`);
// }

//->for of
// let arr=[10,34,56,78,98];
// for(let x of arr){
//     console.log(x);
// }

// let str="Vishal";
// for(let y of str){
//     console.log(y);
// }


//HOISTING : jo bhi { var decalred or funtion declared } hote hai
// unhe yeh shift kr deta hai to the top of their scope
 
// my("Vishal");

// function my(name){
//     console.log(name);
// }

// console.log(x);     //undefined kyuki var ki declaration
// var x=20;         line 262 ke uper shift ho gyi par value nhi hui hai fn ke case me fn pura hota hai


//fn passing
// function greetMe(greet,Name){
//     console.log(`Heloo ${Name}`);
//     greet();
// }
// function greet(){
//     console.log("Hey hoow are you donig");
// }
// greetMe(greet,"Vishal"); 



//fn return
// function solve(num){
//     return function(num){
//         return num*num;
//     }
// }

// let ans=solve(5);
// let finalAns=ans(10);
// console.log(finalAns);


//Temporal dead zone(tdz)
// console.log(marks);
// console.log("Babbar");
// console.log("Love");
// const marks=100;         //line 292 se 295 tk tdz hia iska matlab
// console.log(marks);    //tum  yaha tak marks ki value ko acces nhi kr sakte in case of let and const
 

//CLASSES
 
class Human{
    //properties
    age=22;         //public(class ke andar bahar kahi bhu access kar sakte hai)
    #wt=60;        //private(clas ke bahar use nhi kar skate)
    ht=150;

    constructor(newAge,newHeight,newWeight){
        this.age=newAge;
        this.ht=newHeight;
        this.#wt=newWeight;
    }

    //behaviour
    walking(){
        console.log(`I am walking`);
    }
    running(){
        console.log("I am running");
    }  

    get fetchWeight(){
        return this.#wt;
    }

    set modifyingWeight(val){
        this.#wt=val;
    }
}

let obj1=new Human(23,160,65);
console.log(obj1.age);
// console.log(obj1.#wt);   error private to cure this error below is the code
console.log(obj1.fetchWeight);
obj1.walking();