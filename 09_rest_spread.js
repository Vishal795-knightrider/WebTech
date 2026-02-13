//1.Spread operator
// copies elements 
// avoid refernece issues


// let arr1=[1,2,3];
// let arr2=[...arr1,4,5,6,7];
// console.log(arr2); 


// let arr=[1,2,3,4,5];
// let arr2=[...arr];
// arr2[0]=100;         //deep copy bcoz arr1 remain intect and arr2 chnaged

// console.log(arr);
// console.log(arr2);       


//With Objects
// let emp={id:1,name:"Rahul"};
// let details={...emp,role:"Developer"};

// console.log(details);

// emp.name="Kashyap";
// console.log(emp);           //Deep copy
// console.log(details);


let arr1=[1,2,{name:"John"}];
let arr2=[...arr1];

console.log(arr2);                 //[ 1, 2, { name: 'John' } ]
arr2[1]=10; 
console.log(arr1);             // [ 1, 2, { name: 'John' } ]
console.log(arr2);               //[ 1, 10, { name: 'John' } ]

arr2[2].name="Jane";
console.log(arr1);            //[ 1, 2, { name: 'Jane' } ]
console.log(arr2);         //[ 1, 10, { name: 'Jane' } ]

// if its primtive CSSMathValue,it will be copied by Value,nut  if its Object,it will be copied by referncece.
// so in this ,arr2 is a new array,but the object inside it is the same as 
// the one in arr1.Therefore ,when we change the name proeperty of the object on arr2,it also chnages to arr1


//2.Rest operator exapmples
// collects/bundles values

// IN fn Parameter

function sum(...numbers){          //rest opeartor bcoz fn ke sath use hua
    return numbers.reduce((a,b)=>a+b,0);
}
sum(10,20,30);     //60
