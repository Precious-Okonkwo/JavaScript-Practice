// textContent
const intro = document.getElementById("intro");
intro.textContent = "This is the new intro text"
console.log(intro);

const list = document.querySelector(".list");
list.innerHTML = `
   <li>Apple</li>
   <li>Banana</li>
   <li>Guava</li>
`;

const title = document.querySelector(".title");
//console.log(title.innerHTML);
//console.log(title.textContent);
console.log(title.innerText);


// Attributes
// getAttribute
const pEl = document.querySelector(".content");
const value = pEl.getAttribute("class");
console.log(value);

// setAttribute
const link = document.getElementById("link");
link.setAttribute("href", "https://www.w3schools.com");
link.setAttribute("target", "_blank");

// removeAttribute
const advert = document.querySelector(".advert");
advert.removeAttribute("id");

// Direct property Access
const h2Element = document.querySelector("#title");
console.dir(h2Element);
h2Element.className = "new-title";


// styling
const introJs = document.getElementById("intro-js");
introJs.style.backgroundColor = "gold";
introJs.style.color = "black";
introJs.style.paddingInline = "5rem";
introJs.style.borderRadius = "15px";
introJs.style.transform = "rotate(5deg)";
//introJs.style.display = "none";

const nameJs = document.getElementById("name-js");
nameJs.style.backgroundColor = "blue";
nameJs.style.color = "white";
nameJs.style.margin = "10rem";
nameJs.style.borderRadius = "10rem";

// Data Attribute
console.log(introJs.dataset.introText);
introJs.dataset.uniqueTextId ="gshb5627Ndnk18l";


// Form Values
const fullName = document.getElementById("full-name");
// console.log(fullName.value);
fullName.value = "Sam Jackson";
console.log(fullName.value);

const gender = document.getElementById("gender");
console.dir(gender);
gender.checked = false


// Traversing the DOM
const headingEl = document.getElementById("heading");
console.log(headingEl.parentElement);
console.log(headingEl.parentElement.childNodes);

console.log(headingEl.nextElementSibling.previousElementSibling);


// closest() method
const grandChild = document.querySelector(".grand-child");
console.log(grandChild.closest(".parent"));