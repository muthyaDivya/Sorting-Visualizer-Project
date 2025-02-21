document.addEventListener("DOMContentLoaded", function(){
    let arraySize = document.querySelector("#arr_sz");
    const parentDiv = document.getElementById("bars");

function generateBars(){
    const numbers = [];
    var barCount = arraySize.value;
    parentDiv.innerHTML = ""; //clears previous bars if any
    for(let i = 0; i < barCount; i++){
        numbers.push(Math.floor(Math.random() * barCount) + 1);
    }   
    numbers.forEach(height => {
            const newDiv = document.createElement("div"); // Create a new div
            newDiv.classList.add("bar"); // Add a CSS class for styling
            newDiv.style.height = `${height * 3}px`; // Set height dynamically (scaling factor)
            parentDiv.appendChild(newDiv); // Append it to the parent div
        }
    );

}
document.getElementById("array").addEventListener("click", generateBars);
arraySize.addEventListener("input",generateBars);
});
