// Traversing the DOM
const headingEl = document.getElementById("heading");
console.log(headingEl.parentElement);
console.log(headingEl.parentElement.childNodes);

console.log(headingEl.nextElementSibling.previousElementSibling);


// closest() method
const grandChild = document.querySelector(".grand-child");
console.log(grandChild.closest(".parent"));