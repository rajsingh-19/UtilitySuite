let btnParent = document.querySelector(".btn-container");
let timer = document.querySelector(".para");

let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;

function displaytime (hours, minutes, seconds) {
    timer.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`
};

function timerFn (event) {
    let btn = event.target.name;
    if(btn === "start") {
        intervalId = setInterval((() => {   // it returns an id
            seconds++;
            displaytime(hours, minutes, seconds);
            if (seconds > 58) {
                seconds = 0;
                minutes++;
                displaytime(hours, minutes, seconds);
                if(minutes > 58) {
                    minutes = 0;
                    hours++;
                    displaytime(hours, minutes, seconds);
                }
            }
        }),1000);
    }
    if (btn == "stop") {
        clearInterval(intervalId);
    }
    if (btn == "reset") {
        clearInterval(intervalId);
        seconds = minutes = hours = 0;
        displaytime(hours, minutes, seconds);
    }
}

btnParent.addEventListener("click", timerFn);
