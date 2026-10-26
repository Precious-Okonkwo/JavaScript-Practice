// Accessing DOM Elements
// getElementById
const h1Element = document.getElementById("intro");
// console.log(h1Element);
console.dir(h1Element);
console.dir(h1Element.textContent);

// getElementsByClassName
const allPElement = document.getElementsByClassName("text");
console.log(allPElement);

// getElementsByTagName
const allListElements = document.getElementsByTagName("li");
console.log(allListElements);

// querySelector
const title = document.querySelector(".title");
console.log(title);

const heading = document.querySelectorAll(".dom > h2");
console.log(heading);

// querySelectorAll
const h2El = document.querySelectorAll(".dom > h2");
h2El.forEach(h2 => console.log(h2));
//console.log(heading);

// Examples
const mainHeader = document.getElementById("main-header");
const content = document.querySelector(".content");
console.log(content);



// Modifying DOM Elements