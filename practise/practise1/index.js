// //code1

// const t1=performance.now()
// for(let i=0;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent="This is para "+i;
//     document.body.appendChild(para);    //yaha par baar baar repair and repaint ho raha hai
// }
// const t2=performance.now();
// console.log(`total time by code 1: ${t2-t1}`);

// //code 2
// const t3=performance.now();
// let mydiv=document.createElement('div');
// for(let i=0;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent=`This is Para `+i;
//     mydiv.appendChild(para);     //sare para pehle div me daal diye
// }
// document.body.appendChild(mydiv);   //last me 1 div dall diya   //1 baar repair hua or 1 baar repaint

// const t4=performance.now();
// console.log(`Total time by code 2: ${t4-t3}`);


//Document Fragment :light weight doc object
//best code

let fragment=document.createDocumentFragment();

for(let i=0;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is para "+i;
    //No reflow and no repaint for the below line
    fragment.appendChild(para);
}

document.body.appendChild(fragment);