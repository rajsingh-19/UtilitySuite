let sWcontainer = document.createElement("div");
sWcontainer.classList.add("container");

let sWHeading = document.createElement("h1");
sWHeading.classList.add("heading-1");
sWHeading.innerText = "Stop Watch Timer";

let sWPara = document.createElement("p");
sWPara.classList.add("para");
sWPara.innerText = "00 : 00 : 00";

let sWDiv = document.createElement("div");
sWDiv.classList.add("btn-container");

let btn1 = document.createElement("button");
btn1.classList.add("button");
btn1.name = "start";
btn1.innerText = "Start";

let btn2 = document.createElement("button");
btn2.classList.add("button");
btn2.name = "stop";
btn2.innerText = "Stop";

let btn3 = document.createElement("button");
btn3.classList.add("button");
btn3.name = "reset";
btn3.innerText = "Reset";

document.body.appendChild(sWcontainer);
sWcontainer.appendChild(sWHeading);
sWcontainer.appendChild(sWPara);
sWcontainer.appendChild(sWDiv);
sWDiv.appendChild(btn1);
sWDiv.appendChild(btn2);
sWDiv.appendChild(btn3);