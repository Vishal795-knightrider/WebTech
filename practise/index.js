//1.// function ChangeText(){
//     let fpara=document.getElementById("fpara");
//     fpara.textContent="Kashyap";
// }

// let fpara=document.getElementById("fpara");
// fpara.addEventListener('click',ChangeText);   //fpara element (event target) pr apply kar rha hu  (click karne par,yeh fn chalna chaiye)

// fpara.removeEventListener('click',ChangeText);


//2.// function Event(event){
//      event.preventDefault();
//      anchorElement.textContent="Hahhaaahaaaa";
// }
// let anchorElement=document.getElementById('port');

// anchorElement.addEventListener('click',Event); 



//3.// let paras=document.querySelectorAll('p');  //ise mujhe sara para  mil jayenge

function alertpara(event){
   alert("You have Clicked on para: "+event.target.textContent) 
}

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     // para.addEventListener('click',function(){
//     //     alert("You have Clicked  on para: "+i);
//     // })
//     para.addEventListener('click',alertpara);
// }

// in sab para ko kyu le rahe ho direct div par laga do na// iske liye nicha likha hai

// let mydiv=document.getElementById('wrapper');
document.addEventListener('click',alertpara);

