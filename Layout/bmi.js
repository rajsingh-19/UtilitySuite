let divCon = document.createElement("div");
divCon.classList.add("divCon");
//      --left div--
let divL = document.createElement("div");
divL.classList.add("divL");
//      --metric div--
let lDiv1 = document.createElement("div");
lDiv1.classList.add("choiceDiv");
let head1 = document.createElement("div"); 
head1.classList.add("heading");
head1.innerText = "Metric System";

let metrD1 = document.createElement("div");
metrD1.classList.add("label");
let inpD1 = document.createElement("input");
inpD1.id = "inp1";
inpD1.type = "number";
inpD1.placeholder = "Weight (Kilograms)";

let metrD2 = document.createElement("div");
metrD2.classList.add("label");
let inpD2 = document.createElement("input");
inpD2.id = "inp2";
inpD2.type = "number";
inpD2.placeholder = "Height (Meters)";
//      --btn div--
let btnDiv = document.createElement("div");
btnDiv.classList.add("btnDiv");
let btn = document.createElement("button");
btn.classList.add("btn");
btn.id = "btn";
btn.innerText = "BMI Report";

//      --imperial div--
let lDiv2 = document.createElement("div");
lDiv2.classList.add("choiceDiv");
let head2 = document.createElement("div");
head2.classList.add("heading"); 
head2.innerText = "Imperial System";

let metrD3 = document.createElement("div");
metrD3.classList.add("label");
let inpD3 = document.createElement("input");
inpD3.id = "inp3";
inpD3.type = "number";
inpD3.placeholder = "Weight (Pounds)";

let metrD4 = document.createElement("div");
metrD4.classList.add("label");
let inpD4 = document.createElement("input");
inpD4.id = "inp4";
inpD4.type = "number";
inpD4.placeholder = "Height (Inches)";

//      --right div--
let divR = document.createElement("div");
divR.classList.add("divR");

let bmiDisplay = document.createElement("div");
bmiDisplay.classList.add("bmiD")
let pBmi = document.createElement("input");
pBmi.id = "display";
pBmi.classList.add("pbmi");
pBmi.readOnly = true;
pBmi.placeholder = "0";

let pointsDiv = document.createElement("div");
pointsDiv.classList.add("pointsD");
let head3 = document.createElement("div");
head3.classList.add("head3");
head3.innerText = "BMI interpreted for Adults";
let descDiv = document.createElement("div");
descDiv.classList.add("descDiv");
let des1 = document.createElement("div");
des1.classList.add("des");
des1.innerText = "Below 18.50 : 'Under Weight' ";
let des2 = document.createElement("div");
des2.classList.add("des");
des2.innerText = "18.50 - 24.90 : 'Healthy weight' ";

let des3 = document.createElement("div");
des3.classList.add("des");
des3.innerText = "24.90 - 29.90 : 'Over Weight' ";

let des4 = document.createElement("div");
des4.classList.add("des");
des4.innerText = "30.00 & Above : 'Obesity' ";


//      ---appending---
document.body.appendChild(divCon);
//      --appending left div--
divCon.appendChild(divL);
divL.appendChild(lDiv1);
//      --appending metric div--
lDiv1.appendChild(head1);
lDiv1.appendChild(metrD1);
lDiv1.appendChild(metrD2);
metrD1.appendChild(inpD1);
metrD2.appendChild(inpD2);
//      --append btn Div--
divL.appendChild(btnDiv);
btnDiv.appendChild(btn);
//      ---appending imperial div--
divL.appendChild(lDiv2);
lDiv2.appendChild(head2);
lDiv2.appendChild(metrD3);
metrD3.appendChild(inpD3);
lDiv2.appendChild(metrD4);
metrD4.appendChild(inpD4);
//      --appending right div--


divCon.appendChild(divR);
divR.appendChild(bmiDisplay);
bmiDisplay.appendChild(pBmi);
divR.appendChild(pointsDiv);
pointsDiv.appendChild(head3);
pointsDiv.appendChild(descDiv);
descDiv.appendChild(des1);
descDiv.appendChild(des2);
descDiv.appendChild(des3);
descDiv.appendChild(des4);
