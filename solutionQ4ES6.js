const movies = [
{
title: "Inception",
rating: 8.8,
genres: ["Sci-Fi", "Action"],
earnings: [120, 150, 200],
details: {
director: "Christopher Nolan",

year: 2010
}
},
{
title: "Avengers",
rating: 8.0,
genres: ["Action", "Adventure"],
earnings: [300, 250, 400],
details: null
},
{
title: "Interstellar",
rating: 8.7,
genres: ["Sci-Fi", "Drama"],
earnings: [180, 220, 260],
details: {
director: "Christopher Nolan",
year: 2014
}
}
];

const platforms = ["Netflix", "Prime", "Hotstar", "JioCinema"];

// Q1 Return total number of movies
// Output -> 3
function totalMovies(arr){
return arr.length;
}

// Q2 Return first platform in lowercase
// Output -> netflix
function firstPlatform(arr){
return arr[0].toLowerCase();
}

// Q3 Return title of first movie
// Output -> Inception
function firstMovie(arr){
return arr[0].title;
}

// Q4 Return First movie rating status
// if rating > 8.5 return Blockbuster otherwise Hit
// Output -> Blockbuster
function movieStatus(arr){
return arr[0].rating > 8.5 ? "Blockbuster" : "Hit";
}

// Q5 Return movie titles sorted by rating descending
// Output -> ['Inception','Interstellar','Avengers']
function sortByRating(arr){
return [...arr]
.sort((a,b) => b.rating - a.rating)
.map(movie => movie.title);
}

// Q6 Return all genres in uppercase
// Output -> ['SCI-FI','ACTION','ACTION','ADVENTURE','SCI-FI','DRAMA']
function upperGenres(arr){
return arr
.flatMap(movie => movie.genres)
.map(genre => genre.toUpperCase());
}

// Q7 Return movies whose average earnings are above 200
// Output -> ['Avengers','Interstellar']
function profitableMovies(arr){
return arr
.filter(movie => 
(movie.earnings.reduce((a,b)=>a+b,0) / movie.earnings.length) > 200
)
.map(movie => movie.title);
}

// Q8 Return director names
// if details not available return "Director Not Found"
// Output -> ['Christopher Nolan','Director Not Found','Christopher Nolan']
function movieDirectors(arr){
return arr.map(movie => 
movie.details?.director || "Director Not Found"
);
}

// Q9 Promise resolve after 2 sec
// if average movie rating > 8 return "Platform Successful"
// otherwise return "Platform Average"
// Output -> Platform Successful
function platformStatus(arr){
return new Promise((resolve,reject)=>{
setTimeout(()=>{

const avgRating = arr.reduce((sum,movie)=>sum + movie.rating,0) / arr.length;

if(avgRating > 8){
resolve("Platform Successful");
}
else{
reject("Platform Average");
}

},2000);
});
}

// Q10 Consume platformStatus using then()
// print result in lowercase
// Output -> platform successful
function platformReport(arr){

platformStatus(arr)
.then(res => console.log("Q10:", res.toLowerCase()))
.catch(err => console.log("Q10:", err.toLowerCase()));

}

// DRIVER FUNCTION DO NOT MODIFY
function driver(){

console.log("Q1:", totalMovies(movies));
console.log("Q2:", firstPlatform(platforms));
console.log("Q3:", firstMovie(movies));
console.log("Q4:", movieStatus(movies));

console.log("Q5:", sortByRating(movies));
console.log("Q6:", upperGenres(movies));
console.log("Q7:", profitableMovies(movies));
console.log("Q8:", movieDirectors(movies));

platformStatus(movies)
.then(res => console.log("Q9:", res))
.catch(err => console.log("Q9:", err));

platformReport(movies);

}

driver();