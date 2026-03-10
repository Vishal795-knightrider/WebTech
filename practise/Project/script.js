document.addEventListener("DOMContentLoaded",function(){

const searchButton = document.getElementById("search-button");
const usernameInput = document.getElementById("user-input");
const statsContainer = document.querySelector(".stats-container");
const easyProgressCircle = document.querySelector(".easy-progress");
const mediumProgressCircle = document.querySelector(".medium-progress");
const hardProgressCircle = document.querySelector(".hard-progress");
const easyLabel = document.getElementById("easy-level");
const mediumLabel = document.getElementById("medium-level");
const hardLabel = document.getElementById("hard-level");
const cardStatsContainer = document.querySelector(".stats-cards");


function validateUsername(username){
    if(username.trim()===""){
        alert("Username should not be empty");
        return false;
    }
    const regex=/^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching=regex.test(username);
    if(!isMatching){
        alert("Invalid Username");
        return isMatching;
    }
}
searchButton.addEventListener('click',function(){   //jab bhi button pr click hoga
    const username=usernameInput.value
    console.log("loggin username:"+username);
})

})                     