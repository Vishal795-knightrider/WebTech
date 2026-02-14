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

searchButton.addEventListener('click',function(){
    const username=usernameInput.value
    console.log("loggin username:"+username);
})

})