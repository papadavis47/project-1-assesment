


document.addEventListener("DOMContentLoaded", function(e) {
    // add event listeners to the plus, minus, display count, and input divs
    // read the input.value 
    // turn it to a integer 
    // add it to counter
    let counter = 0;
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const display = document.querySelector("#number");
    const userNum = document.querySelector("#submit");
    
    userNum.value = 1;
    
    plus.addEventListener("click", function(e) {
        console.log(e.target)
        counter += parseInt(userNum.value, 10);
        console.log(counter);
        display.innerText = counter;
    })
    
    minus.addEventListener("click", function(e) {
        console.log(e.target)

        counter -= parseInt(userNum.value, 10);
        display.innerText = counter;

        console.log(counter);
    })
    
    console.log(counter);
    console.log(userNum.value);


})