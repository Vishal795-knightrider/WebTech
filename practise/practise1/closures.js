function outerFunction(){
    let name="Vishal";
    function innerFunction(){      //is fn ke sath name bind ho chuka hai
        console.log(name);
    }
    return innerFunction;
}                                 //outer fn yaha pe khtm ho chuka tha to name free ho jana chaiye the par name print ho raha hai kyuki reaso uper
let inner=outerFunction();
inner();