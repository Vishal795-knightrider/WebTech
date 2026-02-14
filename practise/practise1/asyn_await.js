// using this asynchronous code ko synchronpus code ki tarag dikha pate haoi

// async function getData(){
//                                        //async hamesha promise return krta hai
//     setTimeout(function(){                         
//         console.log("I am inside set Timeout bloack")
//     },2000);
// }
// getData();

//await

async function getData(){     //await async fn ke andar hi chlega

    //get request -- async 
    let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //parse json-- async
    let data=await response.json();
    console.log(data);
}
getData();

//scenario:
//prepare url/api endpoint -> sync
//fetch data -> network call  ->async            //to yaha par await laguag jisse jab yaha pe flow aye tabhi yeh complete ho jaye
//pprocess data ->sync