// Create variables
let id;
let quote;

const number = document.querySelector("h1");
const advice = document.querySelector("blockquote");
const get_advice = document.querySelector(".dice-container");

// Fetch data from API initially
fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    
    .then(data => {
        console.log(data.slip);

        id = data.slip.id;
        quote = data.slip.advice;

        console.log(id);
        console.log(quote);

        number.innerText = `Advice #${id}`;
        advice.innerText = `" ${quote} "`;
        
    })
        
    .catch(error => console.log("Error"))

// Fetch data on button click
get_advice.addEventListener("click", function() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    
    .then(data => {
        console.log(data.slip);

        id = data.slip.id;
        quote = data.slip.advice;

        console.log(id);
        console.log(quote);

        number.innerText = `Advice #${id}`;
        advice.innerText = `" ${quote} "`;
        
    })
        
    .catch(error => console.log("Error"))
})




