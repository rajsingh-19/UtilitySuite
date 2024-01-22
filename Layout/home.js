let homeContainer = document.createElement("div");
homeContainer.classList.add("content-container");
//      --left div code--
let leftDiv = document.createElement("div");
leftDiv.classList.add("left-div");
let imgDiv = document.createElement("div");
imgDiv.classList.add("img-div");
let imgContainer = document.createElement("img");
imgContainer.classList.add("left-div-img");
imgContainer.src = "./Assets/image.jpg";
imgContainer.alt = "An image of home page";
//      ---right div code---
let rightDiv = document.createElement("div");
rightDiv.classList.add("right-div");
let rightDivInner = document.createElement("div");
rightDivInner.classList.add("right-div-inner");
//      ---right div head---
let rightDivHead = document.createElement("div");
rightDivHead.classList.add("right-div-head");
let span1 = document.createElement("span");
span1.id =  "span1";
span1.innerText = "Boost ";
let span1a = document.createElement("span");
span1a.id = "span1a";
span1a.innerText = "your work efficiency!!";
//      ---right div paragraphs---
let rightDivPara1 = document.createElement("div");
rightDivPara1.classList.add("right-div-para");
rightDivPara1.innerText = "Experience this wonderful app features and make your life easier.";
let rightDivPara2 = document.createElement("div");
rightDivPara2.classList.add("right-div-para");
rightDivPara2.innerText = "You can utilise your time and efforts by optimizing your tasks just by using these amazing power tools.";
let rightDivPara3 = document.createElement("div");
rightDivPara3.classList.add("right-div-para");
let para1 = document.createElement("p");
let span3 = document.createElement("span");
span3.id = "span3";
span3.innerText = "Now,  ";
let span2 = document.createElement("span");
span2.id = "span2";
span2.innerText = "Never be late!"
let para2 = document.createElement("p");
para2.innerText = "Ace the time & task management";
//      ---appending---
document.body.appendChild(homeContainer);
//      --apppending left div--
homeContainer.appendChild(leftDiv);
leftDiv.appendChild(imgDiv);
imgDiv.appendChild(imgContainer);
//      ---appending right div---
homeContainer.appendChild(rightDiv);
rightDiv.appendChild(rightDivInner);
rightDivInner.appendChild(rightDivHead);
rightDivHead.appendChild(span1);
rightDivHead.appendChild(span1a);
rightDivInner.appendChild(rightDivPara1);
rightDivInner.appendChild(rightDivPara2);
rightDivInner.appendChild(rightDivPara3);
rightDivPara3.appendChild(para1);
para1.appendChild(span3);
para1.appendChild(span2);
rightDivPara3.appendChild(para2);
