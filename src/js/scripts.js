// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const myName = "yoyo";
const myAge = 100;

console.log(myAge);

// show and hide an element on the page

const toggledParagraph = document.querySelector(".show");
console.log(toggledParagraph);

//Write a function that toggoles the show.hide classes
function toggleParagraph() {
    toggledParagraph.classList.toggle("hide");
    toggledParagraph.classList.toggle("show");
    console.log("My toggle function");
    console.log(toggledParagraph);
}


// Find the button and toggle the paragraph when we click on it
const toggleButton = document. querySelector("#toggle-control");
//console.log(toggleButton);
toggleButton.addEventListener("click", toggleParagraph);
