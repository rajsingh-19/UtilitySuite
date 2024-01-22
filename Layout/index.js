let headingOuterContainer = document.createElement("div");
headingOuterContainer.classList.add("headingOuterContainer");

let headingContainer = document.createElement("div");
headingContainer.classList.add("heading-container");
headingContainer.innerText = "Utility Suite";

let navbar = document.createElement("nav");
navbar.classList.add("nav-container");

let ul = document.createElement("ul");
ul.classList.add("nav-ul");

let textArr = ["Home", "Stop Watch", "Calculator", "BMI"];
let linkArr = ["./index.html", "./stopwatch.html", "./calculator.html", "./bmi.html"];

for (let i = 0; i <= 3; i++) {
    let li = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.classList.add("a");
    anchor.href = linkArr[i];
    anchor.textContent = textArr[i];

    ul.appendChild(li);
    li.appendChild(anchor);
}

document.body.appendChild(headingOuterContainer);
headingOuterContainer.appendChild(headingContainer);
headingOuterContainer.appendChild(navbar);
navbar.appendChild(ul);
