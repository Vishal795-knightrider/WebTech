// acess element
// getElementbyId()
// getElementbyClassName()
// getElementbyTagName('p')
//querySelector(#fpara) //fpara wala id ko retunr karega
//querySelector(.fpara)  //fpara wale class 
//querySelector('p')  //p tag wale ko return                 //ye teno bs 1 ko hi return kartenge agar multiple element return karvne hai to niche dekho
//querySelectorAll('p); 

//update existing element
// innerHTML -> kisi bhi tag ya element ke andar get ya set kar sakta hu
//get-> button.innerHTML    //set-> button.innerHTML='<p>Hello Jee<p>';
// outerHTML
// text-content   //jaisa aapne code likha hai html vaise show krta hai
// innerText     //jaisa ui pe render hoga vesa hi isme dikhayo dega 


//Add element
// let fHeading=document.createElement('h1');
// fHeading.textContent="My name is Vishal";
//jistag ke andar add karna ho.appendChild('p');    //ye last me add krta hu 

//decide which position tO ADD //insertAdjacentElement()  ->position  ->HTML content
// ->position 1.beforebegin 2.afterbegin 3.beforeend 4.afterend
// let mydiv=document.querySelector('#mydiv');
// let newElement=document.createElement('span');
// newElement.textContent="Vishal Kashyap";
// mydiv.insertAdjacentElement('afterend',newElement);

//Removal -> remove child
// let parent=document.querySelector('#mydiv');
// let child=document.querySelector('#fpara');
// parent.removeChild(child);


//changing CSS using js
// .style
// .cssText


//other fn
// .setAttribute() 
//.className
// .classList
 



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

// function alertpara(event){
//    alert("You have Clicked on para: "+event.target.textContent) 
// }

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     // para.addEventListener('click',function(){
//     //     alert("You have Clicked  on para: "+i);
//     // })
//     para.addEventListener('click',alertpara);
// }

// in sab para ko kyu le rahe ho direct div par laga do na// iske liye nicha likha hai

// let mydiv=document.getElementById('wrapper');
// document.addEventListener('click',alertpara);

