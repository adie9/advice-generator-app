// Create variables
let id;
let quote;

const number = document.querySelector("h1");
const advice = document.querySelector("blockquote");

// Fetch data from API
fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    
    .then(data => {
        console.log(data.slip);

        id = data.slip.id;
        quote = data.slip.advice;

        console.log(id);
        console.log(quote);

        number.innerText = `Advice #${id}`;
        advice.innerText = `"${quote}"`;
        
    })
        
    .catch(error => console.log("Error"))




