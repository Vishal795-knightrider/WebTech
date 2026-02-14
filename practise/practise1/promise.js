//Promise is an object represents the eventual Completion(or failure) of an asynchronous operation and its resulting Value.

// a primse is in one of these states
// pending:initial state,neither fulfilled not rejected.
// fulfiled:operation compleetd sucesfully
// rejected:meaning that the operation failed

// This lets asynchronous methods return values like synchronous methods


//Promise: iski do states 1. resolve/fulfilled
                    //    2.reject


// let FirstPromise=new Promise((resolve,reject)=>{
//     setTimeout(function sayMyname(){
//         console.log("My Name is Love Babbar");
//     },10000);
// });


let promise1=new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("Promise Fulfilled");
    }
    else{
        reject("Promise Rejected");
    }
});

promise1.then((message)=>{
    console.log("then ka message is "+message);
})
promise1.catch((error)=>{
    console.log(`Error: ${error}`);
})