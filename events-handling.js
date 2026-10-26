function sayHello() {
    console.log("Hello User!");
}

function sayResult() {
    console.log("Result is 100");
}


// Using the DOM Property Handler
const btn = document.getElementById("btn");
btn.onclick = function() {
    console.log("The result is 200");
}


// Using addEventListener

//Example 1
const increaseButton = document.getElementById("increase-btn");

//The <p> element to display the count value
const displayCountElement = document.getElementById("display-count");

//The count value
let countValue = 1;

// displayCountElement.textContent = countValue

// This one is reusable
function displayCountValue(count) {
    displayCountElement.textContent = count;
}

displayCountValue(countValue);

function increaseCount(initialValue) {
    countValue +=1;
}

function handleCountIncrease() {
    increaseCount();
    displayCountValue(countValue);
}

increaseButton.addEventListener("click", handleCountIncrease);


// Example 2
const displayNameButton = document.getElementById("display-name-btn");

// Using an arrow function
//displayNameButton.addEventListener("click", () => {
//    alert("User name is Precious");
//});

// Using a funtion expression
//displayNameButton.addEventListener("click", function() {
//    alert("User name is Precious");
//});

// Using a function reference
function displayUserName() {
    alert("User name is Precious");
}
displayNameButton.addEventListener("click", displayUserName);


