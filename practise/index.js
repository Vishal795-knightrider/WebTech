function ChangeText(){
    let fpara=document.getElementById("fpara");
    fpara.textContent="Kashyap";
}

let fpara=document.getElementById("fpara");
fpara.addEventListener('click',ChangeText);   //fpara element (event target) pr apply kar rha hu  (click karne par,yeh fn chalna chaiye)

fpara.removeEventListener('click',ChangeText);

