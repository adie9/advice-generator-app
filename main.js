// Fetch data from API
let id;
let quote;

let number = document.querySelector("#id_num");

fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    
    .then(data => console.log(data.slip))
        
    
    
    
    
    .catch(error => console.log("Error"))


