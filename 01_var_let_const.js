// ===== VAR =====
// var is used to declare variables in JavaScript
// var is function scoped (not block scoped)
// var supports hoisting
// var can be redeclared and reassigned

// hoisting example
// console.log(my); // undefined
// var my = 10;
// console.log(my);

// redeclaration
// var my = 20;
// console.log(my);

// function scope example
function demofunction(){
    var my = 30;
    console.log(my);
}
demofunction();

// console.log(my); // ReferenceError (outside function)



// ===== LET =====
// let was introduced in ES6
// let is block scoped
// let does NOT allow redeclaration in same scope
// let supports shadowing

let mylet = 10;
console.log(mylet);
// let mylet = 20;  redeclaration not allowed

// block scope example
{
    let x = 50;
    console.log(x);
}
{
    let x = 100;
    console.log(x);
}

// variable shadowing
{
    let x = 50;
    console.log(x);
    {
        let x = 100;
        let y = 200;
        console.log(y);
        console.log(x);
    }
}



// ===== CONST =====
// const is used to declare constants
// const is block scoped
// const does NOT allow reassignment
// but object/array values CAN be modified

const ok = 10;
console.log(ok);

// block scope
{
    const dip = 10;
    console.log(dip);
}
{
    const dip = 40;
    console.log(dip);
}

// const array example
const arr = [1, 2, "Hello"];
arr.push(3); // allowed
console.log(arr);

// arr = [4,5,6];  not allowed
