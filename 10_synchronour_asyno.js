//1. Synchronous (Blocking)     //javascript is single Threaded
// task are done one after another.
// each task must finish before the next one starts.

// console.log("start");


// for(let i=0;i<10;i++){
//     console.log("Hello,World");
// }
// console.log("end");

//problem
// ui freezes
// app feels slow
// bad for long taska(ap1 calls,file readinig,Database access)


//2.Asynchronous(non-blocking)

// Long tasks run in the background
// the program does not wait -it moves on
// console.log("Start");

// setTimeout(function() {      
//     for(let i=0;i<10;i++){}
//     console.log("Task Done");
// },0);

// for(let i=0;i<5;i++){
// console.log("Helloo",i);
// }
// console.log("End Task");


//Callback in javascript
// a fn is passes as an argument to another fn and executed later


// below is synchroonus ex
function greet(name){
    console.log("Heloo "+name);
}
function processUserInput(callback){
    let name="Abhishek";
    callback(name);
}
processUserInput(greet);    //greet is passed as an argument




// What is Promises in jAavscipt
// A promise is an object that represents the future result of an asynochronous operation.

