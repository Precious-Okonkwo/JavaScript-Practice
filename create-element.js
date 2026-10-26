// Creating Element
const divElement = document.querySelector(".create");

// Create <p> element
const pElement = document.createElement("p");

const linkTag = document.createElement("a")

// Configure
pElement.id = "create-text";
pElement.textContent = "The create element method allows us to create a new DOM element and this new element can be attached to the DOM tree.";

linkTag.href = "https://w3schools.com";
linkTag.textContent = "Go to W3Schools Website";

// Add the new element to the DOM
//divElement.appendChild(pElement);

// Adding multiple element to the Dom
divElement.append(pElement, linkTag);


// creating a div element use innerHTML
const newDivElement = document.createElement("div");

//configure
newDivElement.className = "new-div";
newDivElement.innerHTML = `
    <h2>Understanding the Dom tree</h2>
    <p>This is interal to understanding how the DOM works</p>
`;

// Add the new div element to the Dom
document.body.appendChild(newDivElement);


// Adding a new element in line 58 using prepend
const newElement = document.getElementById("container");

const h3Element = document.createElement("h3");

h3Element.textContent = "This is my work";

newElement.prepend(h3Element);



// Removing Elements from the DOM
const ElementToBeRemoved = document.getElementById("remove")

// using remove()
//ElementToBeRemoved.remove();

// Using removechild()
const firstChild = ElementToBeRemoved.firstElementChild;
ElementToBeRemoved.removeChild(firstChild);



// Replacing Elements
const newList = document.getElementById("new-list");

// create a new list
const list = document.createElement("li");
list.textContent = "New Task";


// Replace the first item
const firstList = newList.firstElementChild;
newList.replaceChild(list, firstList);





